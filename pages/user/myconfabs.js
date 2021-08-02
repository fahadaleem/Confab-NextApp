import Navbar from "../../components/userNavbar";
import Header from "../../components/myconfabs/header";
import ConfabCard from "../../components/allconfabs/cards";
import { Container, Grid } from "@material-ui/core";
import firebase from "../../firebase-config";
import { useUser } from "@clerk/clerk-react";
import { useEffect, useState } from "react";
import EditModal from "../../components/myconfabs/editModal";

export async function getStaticProps(context) {
  const db = firebase.database().ref("confabs");
  let confabs = await db.once("value").then((snapshot) => snapshot.val());

  // confabs = confabs.json();

  return {
    props: { confabs: confabs }, // will be passed to the page component as props
  };
}

const MyConfabs = ({ confabs }) => {
  const { id } = useUser();

  const [allConfabs, setAllConfabs] = useState([]);

  const handleFetchUpdatedConfabs = async () => {
    const db = firebase.database().ref("/confabs");
    const fetchedConfabs = await db.once("value").then((snap) => snap.val());

    console.log(fetchedConfabs, "myconfabs");
    handleFormatAndFilterConfabs(fetchedConfabs);
  };

  const handleFormatAndFilterConfabs = (fetchedConfabs) => {
    console.log(fetchedConfabs, "abcs");
    // convert the confab object to a list of cards
    const convertedConfabs = fetchedConfabs
      ? Object.keys(fetchedConfabs).map((key) => {
          const confab = fetchedConfabs[key];
          return {
            ...confab,
            key: key,
          };
        })
      : [];

    console.log(convertedConfabs, "conver");
    // filter the id from confabs
    const filteredConfabs = convertedConfabs.filter(
      (confab) => confab.userId === id
    );

    console.log(filteredConfabs, "ann");
    setAllConfabs(filteredConfabs);
  };

  useEffect(() => {
    handleFormatAndFilterConfabs(confabs);
  }, []);

  const handleDeleteData = (confabId) => {
    firebase.database().ref(`/confabs/${confabId}`).remove();

    // filter the id from confabs
    const filteredConfabs = allConfabs.filter(
      (confab) => confab.key !== confabId
    );

    console.log(filteredConfabs);
    setAllConfabs(filteredConfabs);
  };

  return (
    <>
      <Navbar />
      <Header />

      <Container maxWidth="xl" style={{ margin: "10px 0" }}>
        <Grid container spacing={3}>
          {allConfabs &&
            allConfabs.map((confab) => {
              const confabTags = Object.values(confab.tags);
              const confabLikes = confab.likes ? Object.keys(confab.likes) : [];
              console.log(confab.key, "aa");
              return (
                <Grid key={confab.id} item lg={4} md={4} sm={12}>
                  <ConfabCard
                    editable={true}
                    confabId={confab.key}
                    username={confab.postedBy}
                    likedPeoplesCount={12}
                    description={confab.description}
                    tags={confabTags}
                    likes={confabLikes}
                    likedPeopleCounts={confabLikes.length}
                    handleDeleteConfab={handleDeleteData}
                    handleFetchUpdatedConfabs={handleFetchUpdatedConfabs}
                  />
                </Grid>
              );
            })}
        </Grid>
      </Container>
    </>
  );
};

export default MyConfabs;
