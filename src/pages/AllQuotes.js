import { Fragment } from "react";
import QuoteList from "../components/quotes/QuoteList";

const AllQuotes = () => {

    const DUMMY_QUOTES = [
        { id:"q1", author: 'Bella', text: "react is fun" },
        { id:"q2", author: 'james', text: "react is tough" },
        { id:"q3", author: 'adward', text: "react is not fun" },
    ];

    return (
        <Fragment>
            <QuoteList quotes={DUMMY_QUOTES} />
        </Fragment>
    )
}
export default AllQuotes;