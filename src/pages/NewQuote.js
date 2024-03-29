import { useEffect } from 'react';
import { useHistory } from 'react-router';
import QuoteForm from '../components/quotes/QuoteForm';
import useHttp from '../hooks/use-http';
import { addQuote } from '../lib/api';

const NewQuote = () => {
    const history = useHistory();

    const {
        sendRequest,
        status,
        data,
        error
    } = useHttp(addQuote);

    useEffect(() => {
        if (status === 'completed') {
            history.push('/quotes');
        }
    }, [status, history]);

    const addQuoteHandler = quoteData => {
        console.log(quoteData);
        sendRequest(quoteData);
        // history.push('/quotes');
    };

    return (
        <QuoteForm isLoading={status === 'pending'} onAddQuote={addQuoteHandler} />
    );
};

export default NewQuote;