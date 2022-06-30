import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ListGroup, Container, Row, Col } from 'react-bootstrap';
import { getUsers, PATH } from '../../utils';

export const ListPage = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        getUsers().then(json => setData(json));
    }, []);
    console.log(data);
    return (
        <Container>
            <Row>
                <Col>
                    <h1>List page</h1>
                </Col>
            </Row>

            <Row>
                <Col>
                    <ListGroup>
                        {data?.map(({ id, name }) => {
                            return (
                                <ListGroup.Item key={id}>
                                    <Link to={`${PATH.details}/${id}`}>{name}</Link>
                                </ListGroup.Item>
                            )
                        })}
                    </ListGroup>
                </Col>
            </Row>
        </Container>
    );
};