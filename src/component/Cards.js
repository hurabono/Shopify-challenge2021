import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/";

import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Avatar,
  IconButton,
  Typography,
  FormControlLabel,
  Checkbox,
  CircularProgress,
  Divider,
} from "@material-ui/core/";
import { red } from "@material-ui/core/colors";
import Favorite from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 500,
    margin: "50px auto",
    width: "90%",
  },
  media: {
    height: 0,
    paddingTop: "100%", // 16:9
  },

  loading: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

function Cards(isLoading) {
  const classes = useStyles();
  const [spinner, setSpinner] = useState(true);

  //nasa api setting
  const [nasaApidata, setNasaApiData] = useState("");

  useEffect(() => {
    fetchApi();

    async function fetchApi() {
      const API_KEY = "1uxsfa4jsbKeMFze4n372dExmILHGpMDWd2dKrhK";
      const response = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`
      );

      const dataApi = await response.json();
      setNasaApiData(dataApi);

      console.log(dataApi);
    }
  }, []);

  const datas = [
    {
      key: 1,
      author: "Stefan Lenz",
      date: "2021-06-16",
      url: "https://apod.nasa.gov/apod/image/2106/ScorpiusEnhanced_Lenz_5000.jpg",
      explanation:
        "If the Earth could somehow be transformed to the ultra-high density of a neutron star , it might appear as it does in the above computer generated figure. Due to the very strong gravitational field, the neutron star distorts light from the background sky greatly. If you look closely, two images of the constellation Orion are visible. The gravity of this particular neutron star is so great that no part of the neutron star is blocked from view - light is pulled around by gravity even from the back of the neutron star.   We keep an  archive file.  Astronomy Picture of the Day is brought to you by  Robert Nemiroff and  Jerry Bonnell . Original material on this page is copyrighted to Robert Nemiroff and Jerry Bonnell.",
    },
    {
      key: 2,
      author: "SpaceFlame_nasa",
      date: "2021-08-10",
      url: "https://apod.nasa.gov/apod/image/2108/SpaceFlame_nasa_1100.jpg",
      explanation:
        "What does fire look like in space? In the gravity on Earth, heated air rises and expands, causing flames to be teardrop shaped. In the microgravity of the air-filled International Space Station (ISS), however, flames are spheres. Fire is the rapid acquisition of oxygen, and space flames meet new oxygen molecules when they float by randomly from all directions -- creating the enveloping sphere.  In the featured image taken in the ISS's Combustion Integration Rack, a spherical flame envelopes clusters of hot glowing soot.  Without oxygen, say in the vacuum of empty space, a fire would go out immediately.  The many chemical reactions involved with fire are complex, and testing them in microgravity is helping humanity not only to better understand fire -- but how to put out fire, too.",
    },
    {
      key: 3,
      author: "SpaceFlame_nasa",
      date: "2021-08-01",
      url: "https://apod.nasa.gov/apod/image/2108/PlutoEnhancedHiRes_NewHorizons_5000.jpg",
      explanation:
        "Pluto is more colorful than we can see. Color data and high-resolution images of our Solar System's most famous dwarf planet, taken by the robotic New Horizons spacecraft during its flyby in 2015 July, have been digitally combined to give an enhanced-color view of this ancient world sporting an unexpectedly young surface. The featured enhanced color image is not only esthetically pretty but scientifically useful, making surface regions of differing chemical composition visually distinct. For example, the light-colored heart-shaped Tombaugh Regio on the lower right is clearly shown here to be divisible into two regions that are geologically different, with the leftmost lobe Sputnik Planitia also appearing unusually smooth. After Pluto, New Horizons continued on, shooting  past asteroid Arrokoth in 2019 and has enough speed to escape our Solar System completely.    Pluto-Related Images with Brief Explanations: APOD Pluto Search",
    },
    {
      key: 4,
      author: "MaryBeth Kiczenski",
      date: "2021-05-05",
      url: "https://apod.nasa.gov/apod/image/2105/SteveMichigan_Kiczenski_960.jpg",
      explanation:
        'What creates STEVEs? Strong Thermal Emission Velocity Enhancements (STEVEs) have likely been seen since antiquity, but only in the past five years has it been realized that their colors and shapes make them different from auroras. Seen as single bright streaks of pink and purple, the origin of STEVEs remain an active topic of research. STEVEs may be related to subauroral ion drifts (SAIDs), a supersonic river of hot atmospheric ions. For reasons currently unknown, STEVEs are frequently accompanied by green "picket-fence" auroras. The featured STEVE image is a combination of foreground and background exposures taken consecutively in mid-March from Copper Harbor, Michigan, USA. This bright STEVE lasted several minutes, spanned from horizon to horizon, and appeared in between times of normal auroras.',
      hdurl:
        "https://apod.nasa.gov/apod/image/2105/SteveMichigan_Kiczenski_1378.jpg",
      media_type: "image",
      service_version: "v1",
      title: "STEVE over Copper Harbor",
    },
    {
      key: 5,
      author: "Vega Toledano Rollover",
      date: "2021-05-23",
      url: "https://apod.nasa.gov/apod/image/2105/MWTree_Toledano_6016.jpg",
      explanation:
        "First came the trees. In the town of Salamanca, Spain, the photographer noticed how distinctive a grove of oak trees looked after being pruned.  Next came the galaxy. The photographer stayed up until 2 am, waiting until the Milky Way Galaxy rose above the level of a majestic looking oak.  From this carefully chosen perspective, dust lanes in the galaxy appear to be natural continuations to branches of the tree.  Last came the light. A flashlight was used on the far side of the tree to project a silhouette. By coincidence, other trees also appeared as similar silhouettes across the relatively bright horizon. The featured image was captured as a single 30-second frame in 2015 and processed to digitally enhance the Milky Way.",
    },
  ];

  useEffect(() => {
    setTimeout(() => setSpinner(false), 2500);
  }, []);

  return (
    <>
      {spinner && isLoading ? (
        <div className={classes.loading}>
          <CircularProgress size="5rem" color="inherit" />
        </div>
      ) : (
        <>
          <Typography variant="h2" component="h2" align="center" gutterBottom>
            today's photo
          </Typography>

          <Card className={classes.root}>
            <CardHeader
              avatar={
                <Avatar aria-label="recipe" className={classes.avatar}></Avatar>
              }
              action={<IconButton aria-label="settings"></IconButton>}
              title={nasaApidata.copyright}
              subheader={nasaApidata.date}
            />
            <CardMedia className={classes.media} image={nasaApidata.url} />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                {nasaApidata.explanation}
              </Typography>
            </CardContent>
            <CardContent>
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<FavoriteBorder />}
                    checkedIcon={<Favorite />}
                    name="checkedH"
                  />
                }
                label="Like"
              />
            </CardContent>
          </Card>

          <Divider light />

          <Typography variant="h3" component="h3" align="center" gutterBottom>
            privious photo
          </Typography>
          {datas &&
            datas.map((props) => (
              <Card className={classes.root}>
                <CardHeader
                  avatar={
                    <Avatar
                      aria-label="recipe"
                      className={classes.avatar}
                    ></Avatar>
                  }
                  action={<IconButton aria-label="settings"></IconButton>}
                  title={props.author}
                  subheader={props.date}
                />
                <CardMedia className={classes.media} image={props.url} />
                <CardContent>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {props.explanation}
                  </Typography>
                </CardContent>
                <CardContent>
                  <FormControlLabel
                    control={
                      <Checkbox
                        icon={<FavoriteBorder />}
                        checkedIcon={<Favorite />}
                        name="checkedH"
                      />
                    }
                    label="Like"
                  />
                </CardContent>
              </Card>
            ))}
        </>
      )}
    </>
  );
}

export default Cards;
