import Navbar from "../../components/userNavbar";
import Header from "../../components/myconfabs/header";
import ConfabCard from "../../components/allconfabs/cards";
import { Container, Grid } from "@material-ui/core";
import firebase from "../../firebase-config";
import { useUser } from "@clerk/clerk-react";
import { useEffect, useState } from "react";

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

  const handleFormatAndFilterConfabs = () => {
    // convert the confab object to a list of cards
    const convertedConfabs = confabs
      ? Object.keys(confabs).map((key) => {
          const confab = confabs[key];
          return {
            ...confab,
            key: key,
          };
        })
      : [];
    // filter the id from confabs
    const filteredConfabs = convertedConfabs.filter(
      (confab) => confab.userId === id
    );

    setAllConfabs(filteredConfabs);
  };

  useEffect(() => {
    handleFormatAndFilterConfabs();
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
          {allConfabs.map((confab) => {
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
