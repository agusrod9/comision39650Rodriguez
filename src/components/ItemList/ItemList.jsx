import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import styles from "./ItemList.module.css";
import { Link } from "react-router-dom";


export const ItemList = ({ items }) => {
  return (
    
    <div className={styles.principal}>
      {items.map((elemento) => {
        return (

          <Card sx={{ width: 300 }} key={elemento.id}>
            <CardMedia
              sx={{ height: 140 }}
              image={elemento.img}
              title={"Imágen de " + elemento.title}
            />

            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {elemento.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {elemento.desc}
              </Typography>
              <Typography variant="body2" color="primary">
                {"U$S " + elemento.price}
              </Typography>
            </CardContent>

            <CardActions>
              <Link to={`/ItemDetail/${elemento.id}`}>
                <Button variant="contained" size="small">
                  Ver más
                </Button>
              </Link>
            </CardActions>
          </Card>

        );
      })}
    </div>
  );
};
export default ItemList;
