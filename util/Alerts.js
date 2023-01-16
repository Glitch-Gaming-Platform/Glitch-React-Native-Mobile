import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal);

const Alerts = {

    display : (title, message, icon, footer) => {

        let data = {};

        if(title) {
            data.title = title;
        }

        if(message) {
            data.text = message;
        }

        if(icon) {
            data.icon = icon;
        }

        if(footer) {
            data.footer = footer;
        }

        MySwal.fire(data);

    }

}

export default Alerts;