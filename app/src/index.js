import React from 'react';
import { render } from 'react-dom';
import { Formik } from 'formik';

function sendRsvpEmail(email) {
    const headers = {
        'Content-Type': 'application/json'
    };

    const body = JSON.stringify(email)

    return fetch(
        'https://email-microservice.herokuapp.com/email',
        { method: 'POST', headers, body }
    );
}

async function onSubmit(values, { setSubmitting, setErrors }) {
    try {
        console.log('posting', values);
        // await sendRsvpEmail(values);
    } catch (e) {
        // TODO
    }
    setSubmitting(false);
}

const RsvpForm = initialValues => (
    <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        render={({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
        }) => (
            <form onSubmit={handleSubmit}>
                <label>
                    Email Address
                    <input
                        type="email"
                        name="who"
                        required={true}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.who}
                    />
                </label>
                <label>
                    <input
                        type="radio"
                        name="coming"
                        required={true}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        checked={values.coming}
                        value={true}
                    />
                    Yes, I'll be there
                </label>
                <label>
                    <input
                        type="radio"
                        name="coming"
                        required={true}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        checked={!values.coming}
                        value={false}
                    />
                    Sorry, can't make it
                </label>
                <button>Submit</button>
            </form>
        )}
    />
);

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
        <RsvpForm
            who=""
            coming={false}
            guests={[]}
        />
    </div>
)

render(
    <App />,
    document.getElementById('react-root')
)
