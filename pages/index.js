/********************************************************************************** 
 * WEB422 – Assignment 4
 *
 * I declare that this assignment is my own work in accordance with Seneca's* Academic Integrity Policy:
 * 
 *  https://www.senecapolytechnic.ca/about/policies/academic-integrity-policy.html 
 * 
 * Name: Yagnik Dankhara Student ID: 112683222 Date: 03/08/2024
 * 
 *******************************************************************************/

import { Row, Col, Image } from 'react-bootstrap';

const Home = () => {
  return (
    <div>
      <Row>
        <Col>
          <Image src="https://upload.wikimedia.org/wikipedia/commons/3/30/Metropolitan_Museum_of_Art_%28The_Met%29_-_Central_Park%2C_NYC.jpg" fluid rounded />
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <p>
          The Metropolitan Museum of Art, affectionately known as "the Met," holds the prestigious title of being the largest art museum in the United States. Nestled in the vibrant city of New York, it has been a beacon of cultural enrichment since its establishment on April 13, 1870. Beyond being a repository of artistic treasures, the Met serves multifaceted roles. It's not merely a place to admire masterpieces but also a hub for scholarly pursuits, with its extensive library and resources dedicated to fostering the study of fine arts. Moreover, it seeks to bridge the gap between art and practical life by promoting the application of artistic principles in manufacturing and everyday activities. As a center for learning and exploration, the Met aims to broaden the public's understanding of various interconnected subjects, enriching lives through accessible education and engaging exhibitions. In essence, the Met embodies the intersection of art, knowledge, and community, offering a space where the beauty of creativity converges with the pursuit of enlightenment."
          </p>
        </Col>
        <Col md={6}>
          <p>
          The Met boasts an astounding permanent collection exceeding two million works of art, distributed across 17 specialized curatorial departments. Occupying the iconic main building at 1000 Fifth Avenue, the museum stands as one of the globe's largest art galleries, its vastness rivaling that of renowned institutions worldwide. Positioned strategically along the Museum Mile, the Met offers visitors an immersive cultural experience at the eastern fringe of Central Park, within the esteemed Upper East Side of Manhattan. Additionally, the museum extends its reach with a secondary location, The Cloisters, nestled within the picturesque Fort Tryon Park in Upper Manhattan. Despite its smaller size compared to the main campus, The Cloisters houses an extensive array of medieval European art, architecture, and artifacts, providing a captivating journey through the rich heritage of the Middle Ages. Through these distinct venues, the Met invites patrons to explore diverse artistic expressions spanning centuries and continents, enriching their understanding of human creativity and history.
          </p>
          <p>
            Here is the link to <a href="https://en.wikipedia.org/wiki/Metropolitan_Museum_of_Art" target="_blank" rel="noreferrer">Wikipedia</a>.
          </p>
        </Col>
      </Row>
    </div>
  );
}

export default Home;