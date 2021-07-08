import { Fragment, useEffect } from "react";
import { Route, useParams, Link, useRouteMatch } from "react-router-dom";
import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';
import LoadingSpinner from "../components/UI/LoadingSpinner";
import useHttp from "../hooks/use-http";
import { getSingleQuote } from '../lib/api';

// const DUMMY_QUOTES = [
//     { id: 'q1', author: 'Max', text: 'Learning react is fun!' },
//     { id: 'q2', author: 'Maximilian', text: 'Learning react is great!' }
// ];

const QuoteDetail = () => {
    const params = useParams();
    const match = useRouteMatch();
    const { sendRequest, status, data, error } = useHttp(getSingleQuote, true);

    // console.log(match);

    // const quote = DUMMY_QUOTES.find(quote => quote.id === params.quoteId);
    const { quoteId } = params;
    useEffect(() => {
        sendRequest(quoteId);
    }, [sendRequest, quoteId]);

    if (status === 'pending') {
        return (
            <div className="centered">
                <LoadingSpinner />
            </div>
        );
    }

    if (error) {
        return <div className="centered">{error}</div>;
    }

    if (!data.text) {
        return <p>No quote found!</p>;
    }

    return (
        <Fragment>
            <HighlightedQuote text={data.text} author={data.author} />
            <Route path={match.path} exact>
                {/* <Route path='/quotes/:quoteId' exact> */}
                <div className='centered'>
                    {/* <Link className='btn--flat' to={`/quotes/${params.quoteId}/comments`}> */}
                    <Link className='btn--flat' to={`${match.url}/comments`}>
                        load comments
                    </Link>
                </div>
            </Route>
            {/* <Route path={`/quotes/${params.quoteId}/comments`}> */}
            <Route path={`${match.path}/comments`}>
                {/* <Route path='/quotes/:quoteId/comments'> */}
                <Comments />
            </Route>
        </Fragment>
    );
};

export default QuoteDetail;