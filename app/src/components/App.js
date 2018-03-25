import React from 'react';
import RsvpForm from './RsvpForm';

const App = () => (
    <div>
        <p>hello world</p>
        <p>nick is wedding pirave on july 15, 2018</p>
        <iframe
            width="600"
            height="450"
            frameBorder="0"
            style={{ border: '0' }}
            src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ3TuAfPvT1IkRR2qwJvcxUpQ&key=AIzaSyByKiSswQhQtBA-amrIC7Oqvv2vJuUeMy4"
            allowFullScreen
        />
        <RsvpForm name="" email="" coming={false} guests={[]} />
    </div>
);

export default App;
