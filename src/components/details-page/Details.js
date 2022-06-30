import React from 'react';
import { useParams } from 'react-router-dom';

export const DetailsPage = () => {
    const params = useParams();

    return (
        <div className="App">
            Details {params}
        </div>
    );
};