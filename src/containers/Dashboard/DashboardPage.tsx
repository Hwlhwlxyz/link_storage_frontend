import {
  Button,
  Container,
  Grid,
  Pagination,
  ToggleButton,
  ToggleButtonGroup,
  Toolbar,
} from "@mui/material";
import ContentCard from "./components/ContentCard";
import { getDocument, getDocumentByTag } from "../../api/document";
import { useEffect, useState } from "react";
import ReactSearchBox from "react-search-box";
import { OneDocument } from "../../models/OneDocument";
import { Link, useParams } from "react-router-dom";
import HeaderBar from "../../components/headerBar";
import { getLoginUserId } from "../../api/auth";
import ContentList from "./components/ContentList";
import { ViewList, ViewModule, ViewQuilt } from "@mui/icons-material";

function DashboardPage() {
  let { tag } = useParams();
  console.log("TAG",tag)
  let [documentData, setDocumentData] = useState<OneDocument[] | undefined>([]);
  let [filteredDocumentData, setFilteredDocumentData] = useState<OneDocument[]>([]);
  
  let [documentListToDisplay, setDocumentListToDisplay] = useState<OneDocument[] | undefined>([]);
  let [searchBoxData, setSearchBoxData] = useState<
    { key: string; value: string }[]
  >([]);
  let [searchBoxKey, setSearchBoxKey] = useState<string>("");

  let [contentStyle, setContentStyle] = useState<string>("list");
  let [page, setPage] = useState<number>(1);
  let [countEachPage, setCountEachPage] = useState<number>(5);
  let [totalpage, setTotalpage] = useState<number>(1);
  

  function getDocumentFunction(userid: string, tag: string|undefined) {
    if (tag !== undefined) {
      return getDocumentByTag(getLoginUserId(), tag)
    }
    else {
      return getDocument(getLoginUserId())
    }
    
  }

  useEffect(() => {
    getDocumentFunction(getLoginUserId(), tag).then((data) => {
      console.log("TAG",tag)
      console.log(data);
      setDocumentData([...data]);
      setFilteredDocumentData([...data]);
      setDocumentListToDisplay([...data]);
      let keyvalueMap = data.map((e: OneDocument) => {
        return { key: e.url, value: e.title };
      });
      setSearchBoxData(keyvalueMap);
      if (data!=null) {
        if (data.length !== 0) {
          setTotalpage(Math.ceil(data.length/countEachPage));
        }
        else {
          setTotalpage(0)
        }
      }
    });
  }, [countEachPage, tag]);

  // change page
  useEffect(() => {
    let start = (page-1)*countEachPage;
    let end = start+countEachPage;
    setDocumentListToDisplay(filteredDocumentData.slice(start, end));
  }, [page, documentData, countEachPage, filteredDocumentData])
  

  function searchBoxOnchange(value: string): void {
    console.log("key:",value)
    if (value == null || value.length == 0) {
      console.log("set default")
      setSearchBoxKey("");
      setFilteredDocumentData(documentData||[]);
      console.log(filteredDocumentData)
      if (documentData!=undefined) {
        setTotalpage(Math.ceil(documentData.length/countEachPage))
      }
      else {
        setTotalpage(1);
      }
    } else {
      setSearchBoxKey(value);
      if (documentData != undefined) {
        // setDocumentListToDisplay(filterDocumentList(documentData, value));
        setFilteredDocumentData(filterDocumentList(documentData, value));
        if (documentListToDisplay!=undefined) {
          // setTotalpage(Math.ceil(documentListToDisplay.length/countEachPage));
          setTotalpage(1); // react-search-box 搜索框在点击其他内容后会清空内容，目前显示所有结果在一页中
        }
        else {
          setTotalpage(1);
        }
        setPage(1);
      }
      
    }
  }

  function filterDocumentList(documentList: OneDocument[], key: string) {
    return documentList.filter((e) => {
      return (
        e.title.includes(key) ||
        e.description.includes(key) ||
        e.url.includes(key)
      );
    });
  }

  function onClickAdd() {
    console.log("add");
  }

  function handlePageChange(event: React.ChangeEvent<unknown>, p: number) {
    console.log(page)
    setPage(p);
  }

  function ContentCardStyle(doc: OneDocument) {
    return (
      <Grid key={doc.id + "card"} item xs={4}>
        <ContentCard
        document={doc}
          refetchFunction={() => {
            getDocument(getLoginUserId()).then((data) => {
              console.log(data);
              setDocumentListToDisplay([...data]);
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
      <Grid key={doc.id + "list"} item xs={12}>
        <ContentList
          document={doc}
          refetchFunction={() => {
            getDocument(getLoginUserId()).then((data) => {
              console.log(data);
              setDocumentListToDisplay([...data]);
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
    <div className="App">
      <header></header>

      <HeaderBar />
      {/* <Toolbar/> */}

      <Container sx={{ background: "#cfe8fc", height: "100%" }}>
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
          clearOnSelect={false}
        />

        <div></div>

        <div id="content">
          <Container component="main" fixed sx={{ background: "#cfe8fc" }}>
            <Grid item xs={12} height={50}>
              <Button
                variant="contained"
                onClick={onClickAdd}
                component={Link}
                to="/new"
              >
                Add
              </Button>
            </Grid>

            <Grid
              container
              direction="row"
              justifyContent="flex-end"
              alignItems="flex-end"
            >
              <ToggleButtonGroup
                value={contentStyle}
                exclusive
                onChange={(
                  event: React.MouseEvent<HTMLElement>,
                  newAlignment: string | null
                ) => {
                  console.log(newAlignment);
                  setContentStyle(newAlignment as string);
                }}
              >
                <ToggleButton value="list" aria-label="list">
                  <ViewList />
                </ToggleButton>
                <ToggleButton value="card" aria-label="module">
                  <ViewModule />
                </ToggleButton>
              </ToggleButtonGroup>
            </Grid>

            <Grid container spacing={2}>
              {documentListToDisplay &&
                documentListToDisplay.map((doc: OneDocument) => {
                  if (contentStyle === "list") {
                    return ContentListStyle(doc);
                  } else if (contentStyle === "card") {
                    return ContentCardStyle(doc);
                  } else {
                    return ContentListStyle(doc);
                  }
                })}
            </Grid>
          </Container>
        </div>
        <Pagination count={totalpage} page={page} onChange={handlePageChange}  color="primary" />
      </Container>
    </div>
  );
}

export default DashboardPage;
