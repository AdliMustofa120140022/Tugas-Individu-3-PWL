import { Outlet } from 'react-router-dom'
import Header from './Header'
import Navigation from './Navbar'
import Footer from './Footer'
import { Row, Col } from 'react-bootstrap'

export default function Layout() {
    return (
        <div id="layout-wrapper">
            <Row>
                <Col className='d-flex justify-content-center'>
                    <Header />
                </Col>
            </Row>

            <Row>
                <Col>
                    <Navigation />
                </Col>
            </Row>

            <Row>
                <Col>
                    <Outlet />
                </Col>
            </Row>

            <Row>
                <Col>
                    <Footer />
                </Col>
            </Row>
        </div>
    );
}