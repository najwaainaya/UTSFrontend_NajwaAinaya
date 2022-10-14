import react from 'react';
import styled from 'styled-components';

const footer = () => {
	return(
	<FooterContainer className="main-footer">
		<FooterContainer className="footer-middle">
		<FooterContainer className="container">
			<FooterContainer className="row">
				<FooterContainer className="col-md-3 col-sm-6">
				<h4>About</h4>
				<ul className="list-unstyled">
					<li>Universitas Negeri Surakarta Sebelas Maret</li>
					<li>Jl. Ir Sutami No.36 A, Surakarta, Jawa Tengah, 57126, Indonesia</li>
					<li>Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi</li>
				</ul>
			</FooterContainer>
			<FooterContainer className="col-md-3 col-sm-6">
				<h4></h4>
				<ul className="list-unstyled">
					<li>Bercita-cita Luhur Membangun Negara</li>
					<li>11 Maret 1976</li>
					<li>Aspire Sublimely to Build Country</li>
				</ul>
			</FooterContainer>
			</FooterContainer>
			<FooterContainer className="footer-bottom">
				<p className="text-xs-center">
					&copy;{new Date().getFullYear()} - All Rights Reserved
				</p>
				</FooterContainer>
			</FooterContainer>
			</FooterContainer>
		</FooterContainer>
	);
}

export default footer

const FooterContainer = styled.footer`
.footer-middle {
    background: var(--mainDark);
    padding-top: 3rem;
    color: var(--mainWhite);
}

.footer-botton {
    padding-top: 3rem;
    padding-botton: 2rem;
}
`;