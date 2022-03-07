import {
  Badge,
  Container,
  Grid,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import ContentCard from "./components/ContentCard";
import SettingsIcon from "@mui/icons-material/Settings";
import { getDocument } from "../../api/document";
import { useEffect, useState } from "react";
import ReactSearchBox from "react-search-box";
import { OneDocument } from "../../models/OneDocument";

import { userId } from "../../components/atom";
import { useRecoilState } from "recoil";
import HeaderBar from "../../components/headerBar";

function DashboardPage() {
  let [documentList, setDocumentList] = useState<OneDocument[] | undefined>([]);
  let [searchBoxData, setSearchBoxData] = useState<
    { key: string; value: string }[]
  >([]);
  let [searchBoxKey, setSearchBoxKey] = useState<string>("");

  const [loginUserId, setLoginUserId] = useRecoilState(userId);
  console.log("loginUserId", loginUserId);
  useEffect(() => {
    getDocument().then((data) => {
      setDocumentList([...data]);
      let keyvalueMap = data.map((e) => {
        return { key: e.url, value: e.url };
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
        e.description.includes(searchBoxKey) || e.url.includes(searchBoxKey)
      );
    });
  }

  return (
    <div className="App">
      <header></header>

      <HeaderBar />

<Container>
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

      <div id="content">
        <Container component="main" fixed sx={{ bgcolor: "#cfe8fc" }}>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <ContentCard title={"title1"} url={"url1"} description={"d1"} />
            </Grid>
            <Grid item xs={4}>
              <ContentCard title={"title2"} url={"url2"} description={"d2"} />
            </Grid>
            <Grid item xs={4}>
              <ContentCard title={"title3"} url={"url3"} description={"d3"} />
            </Grid>
            <Grid item xs={4}>
              <ContentCard title={"title3"} url={"url3"} description={"d3"} />
            </Grid>
          </Grid>

          <Grid container spacing={2}>
            {documentList &&
              filterDocumentList(documentList).map((doc) => {
                return (
                  <Grid key={doc.url} item xs={4}>
                    <ContentCard
                      title={"title"}
                      url={doc.url}
                      description={doc.description}
                    />
                  </Grid>
                );
              })}
          </Grid>
        </Container>
      </div>
</Container>
      
    </div>
  );
}

export default DashboardPage;
