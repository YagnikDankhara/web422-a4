import { useRouter } from 'next/router';
import useSWR from 'swr';
import { Row, Col, Pagination, Card } from 'react-bootstrap';
import ArtworkCard from '@/components/ArtworkCard.js';
import Error from 'next/error';
import React from 'react';

const PER_PAGE = 12;

const Artwork = () => {
  const router = useRouter();
  const [artworkList, setArtworkList] = React.useState(null);
  const [page, setPage] = React.useState(1);

  const finalQuery = router.asPath.split('?')[1];
  const { data, error } = useSWR(`https://collectionapi.metmuseum.org/public/collection/v1/search?${finalQuery}`);

  React.useEffect(() => {
    if (data) {
      const results = [];
      for (let i = 0; i < data?.objectIDs?.length; i += PER_PAGE) {
        const chunk = data?.objectIDs.slice(i, i + PER_PAGE);
        results.push(chunk);
      }
      setArtworkList(results);
      setPage(1);
    }
  }, [data]);

  const previousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const nextPage = () => {
    if (page < artworkList.length) {
      setPage(page + 1);
    }
  };

  if (error) return <Error statusCode={404} />;
  
  if (!artworkList) return null;

  return (
    <div>
      {artworkList.length > 0 ? (
        <>
          <Row className="gy-4">
            {artworkList[page - 1]?.map((currentObjectID) => (
              <Col lg={3} key={currentObjectID}>
                <ArtworkCard objectID={currentObjectID} />
              </Col>
            ))}
          </Row>
          <Row>
            <Col>
              <Pagination>
                <Pagination.Prev onClick={previousPage} />
                <Pagination.Item>{page}</Pagination.Item>
                <Pagination.Next onClick={nextPage} />
              </Pagination>
            </Col>
          </Row>
        </>
      ) : (
        <Card>
          <Card.Body>
            <h4>Nothing Here</h4>
            Try searching for something else.
          </Card.Body>
        </Card>
      )}
    </div>
  );
}

export default Artwork;