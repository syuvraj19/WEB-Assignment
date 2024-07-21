import useSWR from "swr";
import Error from "next/error";
import Card from "react-bootstrap/Card";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function ArtworkCardDetail(props) {
  const url = `https://collectionapi.metmuseum.org/public/collection/v1/objects/${props.objectID}`;

  const { data, error } = useSWR(url, fetcher);
  if (error) {
    return <Error statusCode={404} />;
  }
  if (data) {
    return (
      <>
        <Card>
          {data?.primaryImage && (
            <Card.Img variant="top" src={data?.primaryImage} />
          )}
          <Card.Body>
            <Card.Title>{data?.title}</Card.Title>
            <Card.Text>
              <strong>Date: </strong>
              {data?.objectDate ? data.objectDate : "N/A"} <br />
              <strong>Classification: </strong>
              {data?.classification ? data?.classification : "N/A"}
              <br />
              <strong>Medium: </strong>
              {data?.medium ? data?.medium : "N/A"}
              <br />
              <br />
              <strong>Artist: </strong>
              {data?.artistDisplayName ? (
                <span>
                  {data.artistDisplayName}
                  {data.artistWikidata_URL ? (
                    <span>
                      {" ( "}
                      <a
                        href={data.artistWikidata_URL}
                        target="_blank"
                        rel="noreferrer"
                      >
                        wiki
                      </a>
                      {" )"}
                    </span>
                  ) : null}
                </span>
              ) : (
                "N/A"
              )}
              <br />
              <strong>Credit Line: </strong>
              {data?.creditLine ? data?.creditLine : "N/A"}
              <br />
              <strong>Dimensions: </strong>
              {data?.dimensions ? data?.dimensions : "N/A"}
            </Card.Text>
          </Card.Body>
        </Card>
      </>
    );
  } else return null;
}
