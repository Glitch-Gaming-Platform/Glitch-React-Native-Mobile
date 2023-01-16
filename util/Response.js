const Response = {
    parseJSONFromError(error) {
        
        error = error.toString();

        error = error.replace('Error: ', '');

        try {
            return JSON.parse(error);
        } catch(e) {

            return false;
        }
    }
}

export default Response;