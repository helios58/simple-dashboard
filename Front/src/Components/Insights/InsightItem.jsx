import { Box, CardMedia, Typography } from '@mui/material';

const InsightItem = ({ imageSrc, title, paragraph, backGround }) => (
  <Box
    sx={{
      display: 'flex',
      alignItems: 'center',
      gap: 2,
      mb: 2,
    }}
  >
    <CardMedia
      sx={{
        height: { xs: 60, sm: 80 },
        width: { xs: 60, sm: 80 },
        backgroundColor: backGround,
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
      }}
    >
      <img
        src={imageSrc}
        alt={paragraph}
        style={{
          height: 40,
          width: 40,
          objectFit: 'contain',
        }}
      />
    </CardMedia>
    <Box sx={{ flex: 1 }}>
      <Typography sx={{ fontWeight: 600 }}>{title}</Typography>
      <Typography variant="body2" color="text.secondary">
        {paragraph}
      </Typography>
    </Box>
  </Box>
);

export default InsightItem;
