import QuoteForm from '../components/quotes/QuoteForm.js';
const NewQuotes = () => {

    /*const onAddQuote = {
        author: '',
        text: ''
    };*/
    

    const onAddQuote = (value) => {
        console.log(value.author);
        console.log(value.text);
    }
    return (
        <div>
            <QuoteForm onAddQuote={onAddQuote}/>
        </div>
    );
}

export default NewQuotes;