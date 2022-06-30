import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { Button, Col, Form, Row, Container } from 'react-bootstrap';
import { getUser, getCarsList } from '../../utils';

export const DetailsPage = () => {
    const { id } = useParams();
    const [details, setDetails] = useState(null);
    const [selectedCar, setSelectedCar] = useState('');

    useEffect(() => {
        getUser(id).then(json => {
            setDetails(json);
        });
    }, [id]);

    const onInputChange = useCallback((e) => {
        const value = e.target.value;
        const name = e.target.name;

        setDetails((prev) => ({
            ...prev,
            [name]: value
        }))
    }, []);

    const onCarSelect = (e) => setSelectedCar(e.target.value);

    const onSubmit = (e) => {
        e.preventDefault()

        /**
         * Here should be some manipulations for the POST call
         */
        toast.success(
            'Data was saved, see console :)',
            { position: 'bottom-right' }
        );
        console.log('Data to save: ', { ...details, car: selectedCar });
    };

    if (!details) return null;

    const { name, username, email } = details;
    const carsList = getCarsList(username);

    return (
        <Container>
            <Row>
                <Col>
                    <h1>Details page: {username}</h1>
                </Col>
            </Row>

            <Row>
                <Col>
                    <Form>
                        <Form.Group className='mb-3' controlId='formBasicEmail'>
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                name='name'
                                type='text'
                                placeholder='Enter name'
                                defaultValue={name}
                                value={name}
                                onChange={onInputChange}
                            />
                        </Form.Group>

                        <Form.Group className='mb-3' controlId='formBasicEmail'>
                            <Form.Label>Username</Form.Label>
                            <Form.Control
                                name='username'
                                type='text'
                                placeholder='Enter username'
                                defaultValue={username}
                                value={username}
                                onChange={onInputChange}
                            />
                        </Form.Group>

                        <Form.Group className='mb-3' controlId='formBasicEmail'>
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                name='email'
                                type='email'
                                placeholder='Enter email'
                                defaultValue={email}
                                value={email}
                                onChange={onInputChange}
                            />
                        </Form.Group>

                        <Form.Group className='mb-3' controlId='formBasicEmail'>
                            <Form.Label>Select your car</Form.Label>
                            <Form.Select
                                aria-label="Select your car"
                                onChange={onCarSelect}
                                value={selectedCar}
                            >
                                {carsList.map((car) => <option key={car} value={car}>{car}</option>)}
                            </Form.Select>
                        </Form.Group>

                        <Button variant='primary' type='submit' onClick={onSubmit}>
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>

            <ToastContainer />
        </Container>
    );
};