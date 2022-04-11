import { Button, Container, Grid, Toolbar } from "@mui/material";
import ContentCard from "./components/ContentCard";
import { getDocument } from "../../api/document";
import { useEffect, useState } from "react";
import ReactSearchBox from "react-search-box";
import { OneDocument } from "../../models/OneDocument";
import { Link } from "react-router-dom";
import HeaderBar from "../../components/headerBar";
import { getLoginUserId } from "../../api/auth";
import ContentList from "./components/ContentList";

function DashboardPage() {
  let [documentList, setDocumentList] = useState<OneDocument[] | undefined>([]);
  let [searchBoxData, setSearchBoxData] = useState<
    { key: string; value: string }[]
  >([]);
  let [searchBoxKey, setSearchBoxKey] = useState<string>("");

  useEffect(() => {
    getDocument(getLoginUserId()).then((data) => {
      console.log(data);
      setDocumentList([...data]);
      let keyvalueMap = data.map((e: OneDocument) => {
        return { key: e.url, value: e.title };
      });
      setSearchBoxData(keyvalueMap);
    });
  }, []);

  function searchBoxOnchange(value: string): void {
    if (value == null || value.length == 0) {
      setSearchBoxKey("");
    } else {
      setSearchBoxKey(value);
    }
  }

  function filterDocumentList(documentList: OneDocument[]) {
    return documentList.filter((e) => {
      return (
        e.title.includes(searchBoxKey) || e.description.includes(searchBoxKey) || e.url.includes(searchBoxKey)
      );
    });
  }

  function onClickAdd() {
    console.log("add");
  }

  function ContentCardStyle(doc: OneDocument) {
    return (
      <Grid key={doc.id+"card"} item xs={4}>
        <ContentCard
          id={doc.id}
          title={doc.title}
          url={doc.url}
          description={doc.description}
          refetchFunction={() => {
            getDocument(getLoginUserId()).then((data) => {
              console.log(data);
              setDocumentList([...data]);
              let keyvalueMap = data.map((e: OneDocument) => {
                return { key: e.url, value: e.title };
              });
              setSearchBoxData(keyvalueMap);
            });
          }}
        />
      </Grid>
    );
  }

  function ContentListStyle(doc: OneDocument) {
    return (
      <Grid key={doc.id+"list"} item xs={12}>
        <ContentList
          document = {doc}
          refetchFunction={() => {
            getDocument(getLoginUserId()).then((data) => {
              console.log(data);
              setDocumentList([...data]);
              let keyvalueMap = data.map((e: OneDocument) => {
                return { key: e.url, value: e.title };
              });
              setSearchBoxData(keyvalueMap);
            });
          }}
        />
      </Grid>
    );
  }

  return (
    <div className="App" >
      <header></header>

      <HeaderBar />
      {/* <Toolbar/> */}

      <Container sx={{background: "#cfe8fc", height:"100%"}}>
        <ReactSearchBox
          placeholder="Placeholder"
          data={searchBoxData}
          onSelect={(record: any) => console.log(record)}
          onFocus={() => {
            console.log("This function is called when is focussed");
          }}
          onChange={(value) => searchBoxOnchange(value)}
          autoFocus
          leftIcon={<>🎨</>}
          iconBoxSize="48px"
        />

        <div></div>

        <div id="content">
          <Container component="main" fixed sx={{ background: "#cfe8fc" }}>
            
            <Grid item xs={12} height={50}>
              <Button variant="contained" onClick={onClickAdd} component={Link} to="/new">
                Add
              </Button>

              {/* <ContentCard title={"title1"} url={"url1"} description={"d1"} /> */}
            </Grid>

            <Grid container spacing={2}>
              {documentList &&
                filterDocumentList(documentList).map((doc: OneDocument) => {
                  return ContentListStyle(doc)
                })}
            </Grid>
          </Container>
        </div>
      </Container>
    </div>
  );
}



export default DashboardPage;
