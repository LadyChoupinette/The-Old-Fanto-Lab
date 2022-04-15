import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import BiotechIcon from '@mui/icons-material/Biotech';
import GrassIcon from '@mui/icons-material/Grass';
import HomeIcon from '@mui/icons-material/Home';
import SvgIcon from "@mui/material/SvgIcon";

type Anchor = 'top' | 'left' | 'bottom' | 'right';

export default function TemporaryDrawer() {
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer =
        (anchor: Anchor, open: boolean) =>
            (event: React.KeyboardEvent | React.MouseEvent) => {
                if (
                    event.type === 'keydown' &&
                    ((event as React.KeyboardEvent).key === 'Tab' ||
                        (event as React.KeyboardEvent).key === 'Shift')
                ) {
                    return;
                }

                setState({...state, [anchor]: open});
            };

    function CaveIcon() {
        return (
            <>
                <SvgIcon
                    sx={{fontSize: 60, cursor: "not-allowed"}}
                    className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium "
                    viewBox="50 75 240 240" width="100%" height="100%" style={{
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeMiterlimit: 1.5

                }}>
                    <rect id="Cave" x="0" y="0" width="32px" height="32px" style={{fill: "none"}}/>
                    <g>
                        <path
                            d="M146.325,230.22l-108.397,0l77.791,-83.965l28.687,30.964l61.452,-90.233l97.548,143.234l-108.397,0l5.831,-9.434l-12.006,0.129l0.212,-18.149l-10.42,5.917l-8.79,-14.781l-8.789,14.781l-10.421,-5.917l0.212,18.131l-10.344,-0.111l5.831,9.434Z"
                            style={{color: "rgb(0,0,0)", stroke: "rgb(0,0,0)", strokeWidth: 12.11}}/>
                        <path
                            d="M140.494,218.119l10.344,0.111l-0.212,-18.131l10.421,5.917l8.789,-14.781l8.79,14.781l10.42,-5.917l-0.212,18.149l12.006,-0.129l-7.654,12.383l1.991,3.348l-50.681,-0l2.805,-4.717l-6.807,-11.014Z"
                            style={{fill: "none", stroke: "rgba(255,255,255,0.2)", strokeWidth: 5.41}}/>
                        <path
                            d="M140.494,218.119l10.344,0.111l-0.212,-18.131l10.421,5.917l8.789,-14.781l8.79,14.781l10.42,-5.917l-0.212,18.149l12.006,-0.129l-7.654,12.383l1.991,3.348l-50.681,-0l2.805,-4.717l-6.807,-11.014Z"
                            style={{fill: "rgba(255,255,255,0)"}}/>
                        <path
                            d="M312.667,250.643c-0,-2.044 -1.66,-3.704 -3.705,-3.704l-276.591,-0c-2.044,-0 -3.704,1.66 -3.704,3.704c-0,2.045 1.66,3.705 3.704,3.705l276.591,-0c2.045,-0 3.705,-1.66 3.705,-3.705Z"/>
                    </g>
                </SvgIcon>
            </>
        );
    }

    function ObsIcon() {
        return (
            <>
                <SvgIcon sx={{fontSize: 60}} viewBox="0 0 256 256" width="100%" height="100%" version="1.1"
                         xmlns="http://www.w3.org/2000/svg"
                         style={{
                             fillRule: "evenodd",
                             clipRule: "evenodd",
                             strokeLinecap: "round",
                             strokeLinejoin: "round",
                             strokeMiterlimit: 1.5
                         }}>
                    <rect id="Obs" x="24px" y="24px" width="256" height="256" style={{fill: "none"}}/>
                    <g id="Obs">
                        <g>
                            <clipPath id="_clip1">
                                <rect x="45.5" y="52.5" width="165" height="86.5"
                                      style={{fill: "#ffffff", stroke: "rgb(0,0,0)"}}/>
                            </clipPath>
                            <g clipPath="url(#_clip1)">
                                <circle cx="128" cy="135" r="76.5"
                                        style={{fill: "#ffffff", stroke: "rgb(0,0,0)", strokeWidth: 8.33}}/>
                            </g>
                            <path
                                d="M102.4,205l0,-41.549c0,-7.268 5.489,-13.168 12.25,-13.168l24.5,-0c6.761,-0 12.25,5.9 12.25,13.168l0,41.549l33.1,0c11.038,0 20,-9.634 20,-21.5l0,-43c-0.163,-17.515 -1.197,-21.547 -4.5,-21.5l-146,0c-2.094,3.7 -1.502,0.035 -2.5,21.5l0,43c0,11.866 8.962,21.5 20,21.5l30.9,0Z"
                                style={{fill: "rgb(0,0,0)", stroke: "rgb(0,0,0)", strokeWidth: 8.33}}/>
                            <path
                                d="M120,63c1.273,0.769 15.216,9.353 20,24c4.55,13.932 4,28 4,28l24,0.246c0,0 0.736,-14.712 -4,-28.246c-4.942,-14.124 -20,-23 -20,-23c-6.106,-0.965 -19.353,-1.858 -24,-1Z"
                                style={{
                                    fill: "none",
                                    stroke: "#rgba(0, 0, 0, 0.54)",
                                    strokeWidth: 12.5,
                                    strokeLinejoin: "miter",
                                    strokeMiterlimit: 5
                                }}/>
                            <path
                                d="M120,63c1.273,0.769 15.216,9.353 20,24c4.55,13.932 4,28 4,28l24,0.246c0,0 0.736,-14.712 -4,-28.246c-4.942,-14.124 -20,-23 -20,-23c-6.106,-0.965 -19.353,-1.858 -24,-1Z"
                                style={{fill: "rgb(0,0,0)"}}/>
                            <ellipse cx="150.049" cy="85.994" rx="9.985" ry="10.006"
                                     style={{
                                         fill: "none",
                                         stroke: "#ffffff",
                                         strokeWidth: 8.33,
                                         strokeLinejoin: "miter",
                                         strokeMiterlimit: 5
                                     }}/>
                            <ellipse cx="150.049" cy="85.994" rx="9.985" ry="10.006"
                                     style={{fill: "rgb(0,0,0)"}}/>
                        </g>
                    </g>
                </SvgIcon>
            </>
        );
    }

    const list = (anchor: Anchor) => (
        <Box
            sx={{
                width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250,
                backgroundColor: 'rgba(160, 280, 75, 0.51) !important',
            }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {['The Observatory', 'The Fields', 'The Workshop', 'The Old Cave', 'Main Menu'].map((text, index) => (
                    <ListItem key={text} button sx={{textAlign: 'center', display: 'block'}}>

                        <ListItemIcon>

                            {index ===4 ? <a href='./'><HomeIcon sx={{fontSize: 50, color: "rgb(0,0,0)"}}/></a>
                                : index === 3 ?
                                <SvgIcon component={CaveIcon} sx={{cursor: "not-allowed"}}/>
                                : index === 2 ?
                                    <a href='./workshop' target='_blank'><BiotechIcon sx={{fontSize: 50, color: "rgb(0,0,0)", cursor: "not-allowed"}}/></a>
                                    : index === 1 ?
                                        <a href='./fields' ><GrassIcon sx={{fontSize: 50, color: "rgb(0,0,0)"}}/></a>
                                        : <a href='https://nft-watch.vercel.app/' target='_blank'><ObsIcon/></a>
                            }

                        </ListItemIcon>
                        <ListItemText className="link-drawer" primary={text}
                                      sx={{fontWeight: '900', cursor: index === 0 ? "normal" : "not-allowed"}}/>
                    </ListItem>
                ))}
            </List>
            <Divider/>
        </Box>
    );

    return (
        <div>
            {(['left'] as const).map((anchor) => (
                <React.Fragment key={anchor}>
                    <Button id="explore-button" onClick={toggleDrawer(anchor, true)}>Explore</Button>
                    <Drawer
                        className="drawer"
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                    >
                        {list(anchor)}
                    </Drawer>
                </React.Fragment>
            ))}
        </div>
    );
}
