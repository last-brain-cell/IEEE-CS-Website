import "./styles.css"
import {FormControl, OutlinedInput} from "@mui/material";

const Footer = () => (
    <div className="footer">
        <div>
            <FormControl sx={{ width: '25ch' }}>
                <OutlinedInput placeholder="Please enter text"/>
                <p>Email ID</p>
            </FormControl>
        </div>
    </div>
);

export default Footer;