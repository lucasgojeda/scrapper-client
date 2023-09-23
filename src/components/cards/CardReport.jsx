/* eslint-disable react/prop-types */
/** Libraries */
import {
  Card,
  CardContent,
  Typography,
  IconButton,
  styled,
} from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import moment from "moment";
import { useS3Client } from "../../hooks";

const StyledCard = styled(Card)(({ theme }) => ({
  width: "50%",
  minHeight: "100px",
  maxHeight: "100px",
  marginBottom: theme.spacing(2), // Espacio entre tarjetas
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Sombra de la tarjeta
  borderRadius: theme.shape.borderRadius,
  paddingBottom: 0,
  [theme.breakpoints.down(1200)]: {
    width: "95%",
  },
}));

const TitleContainer = styled("div")(() => ({
  width: "100%",
  minHeight: "30px",
  gap: "2.5px",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  flexWrap: "wrap",
  "& .MuiTypography-root": {
    padding: 0,
    margin: 0,
    lineHeight: 0,
  },
}));

const DownloadIconContainer = styled("div")(() => ({
  width: "100%",
  display: "flex",
  alignItems: "end",
  justifyContent: "space-between",
}));

export const CardReport = ({ id, name, date, productsQuantity }) => {
  const { getS3Link } = useS3Client();

  return (
    <StyledCard>
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <TitleContainer>
          <Typography
            sx={{
              display: "inline-block",
              wordWrap: "break-word",
            }}
            fontFamily="monospace"
            variant="h6"
          >
            {name}
          </Typography>
          <Typography
            fontFamily="sans-serif"
            variant="body2"
            color="textSecondary"
            fontStyle="italic"
            fontSize={12}
          >
            {`(${productsQuantity} productos)`}
          </Typography>
        </TitleContainer>
        <DownloadIconContainer>
          <Typography
            fontFamily="sans-serif"
            variant="body2"
            color="textSecondary"
            fontStyle="italic"
          >
            {moment(date).format("MMM DD YYYY - HH:mm")}
          </Typography>
          <IconButton
            color="primary"
            aria-label="Download"
            onClick={() => getS3Link(id, name)}
          >
            <DownloadIcon />
          </IconButton>
        </DownloadIconContainer>
      </CardContent>
    </StyledCard>
  );
};
