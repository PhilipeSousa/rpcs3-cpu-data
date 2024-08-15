import Papa from 'papaparse';

const fetchCsvData = async (url, hasHeader = true) =>{
    const response = await fetch(url);

    if (!response.ok){
        throw new Error(`Error fetching data -> ${response.status}`);
    }

    const reader = response.body.getReader();
    const decoder = new TextDecoder('utf-8');
    let csv = '';
    let done = false;

    while(!done){
        const {value, done: readerDone } = await reader.read();
        done = readerDone;
        csv += decoder.decode(value, {stream: !done});
    }
    
    const parsedData = Papa.parse(csv, {header: hasHeader });
    return parsedData.data;
}

export default fetchCsvData;