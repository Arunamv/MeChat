import { Toolbar,AppBar,ButtonGroup,Button } from "@material-ui/core"
import { MydrawerStyle } from "./MydrawerStyle"
import CloseIcon from '@material-ui/icons/Close'
import MaximizeIcon from '@material-ui/icons/Maximize'
import CropSquareIcon from '@material-ui/icons/CropSquare'
import RemoveIcon from '@material-ui/icons/Remove';

import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
const Appbar=()=>{
    const classes=MydrawerStyle()
    return(
        <div>
            <AppBar position='fixed' elevation={1} className={classes.tool}>
                <Toolbar className={classes.toolbar}>
                 <ButtonGroup  aria-label="outlined primary button group">
                    <Button><RemoveIcon/></Button>
                    <Button><CropSquareIcon/></Button>
                    <Button><CloseIcon /></Button>
                </ButtonGroup>
                </Toolbar>
            </AppBar>
        </div>

    )
}
export default Appbar