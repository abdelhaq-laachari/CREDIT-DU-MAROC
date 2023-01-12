import React from "react";
import { Page, Text, Image, Document, StyleSheet } from "@react-pdf/renderer";
import Logo from "../../assets/img/cdm.png";

const DownloadPdf = ({ date, amount, type, description }) => {
  const styles = StyleSheet.create({
    body: {
      paddingTop: 35,
      paddingBottom: 65,
      paddingHorizontal: 35,
    },
    logoBox: {
      marginBottom: 10,
    },
    logo: {
      width: "100px",
    },
    logoName: {
      fontSize: 12,
    },
    lineO: {
      width: "100%",
      height: 6,
      backgroundColor: "#FFA500",
    },
    lineB: {
      width: "100%",
      height: 6,
      backgroundColor: "#0070C0",
      marginBottom: 20,
    },
    titleC: {
      marginVertical: 10,
      width: "100%",
    },
    title: {
      fontSize: 12,
      fontWeight: "bold",
      marginLeft: 10,
    },
    blackLine:{
      width: "100%",
      height: 1,
      backgroundColor: "#000000",
      marginVertical: 10,
    }
  });

  return (
    <>
      <Document>
        <Page size="A4" style={styles.body}>
          <Text style={styles.logoBox}>
            <Image style={styles.logo} src={Logo} />
            <Text style={styles.logoName}>Crédir Du Maroc</Text>
          </Text>
          <Text style={styles.lineO}></Text>
          <Text style={styles.lineB}></Text>
          {/* <Text style={styles.container}> */}
            <Text style={styles.titleC}>
              <Text style={styles.title}>Amount: </Text>
              <Text style={styles.title}>{amount}</Text>
            </Text>
            <Text style={styles.blackLine}></Text>
            <Text style={styles.titleC}>
              <Text style={styles.title}>Type: </Text>
              <Text style={styles.title}>{type}</Text>
            </Text>
            <Text style={styles.blackLine}></Text>
            <Text style={styles.titleC}>
              <Text style={styles.title}>Date: </Text>
              <Text style={styles.title}>{date}</Text>
            </Text>
            <Text style={styles.blackLine}></Text>
            <Text style={styles.titleC}>
              <Text style={styles.title}>Description: </Text>
              <Text style={styles.title}>{description}</Text>
            </Text>
            {/* <Text style={styles.blackLine}></Text> */}
          {/* </Text> */}
        </Page>
      </Document>
    </>
  );
};

export default DownloadPdf;
