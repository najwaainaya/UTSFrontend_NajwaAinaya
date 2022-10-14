// import react from "react";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import foto1 from './gbr1.jpg';


const content = () => {

return(
	<Row xs={1} md={5} className="flex-md-row">
	{Array.from({ length: 6 }).map((_, idx) => (
		<Col>
		<Card>
		<Card.Img variant="top" src={foto1} />
		<Card.Body>
		<Card.Title>Sejarah UNS</Card.Title>
		<Card.Text>
		Universitas Sebelas Maret (UNS) merupakan perguruan tinggi negeri yang berlokasi di Kota Solo. 
		Kampus yang didirikan sesuai dengan namanya pada tanggal 11 Maret 1976 ini memiliki moto dalam bahasa Jawa “Mangesthi Luhur Ambangun Nagara” 
		atau jika diterjemahkan dalam bahasa Indonesia berarti “Bercita-cita Luhur Membangun Negara”.
		</Card.Text>
		</Card.Body>
		</Card>
		</Col>
	))}
	</Row>
);
}

export default content
