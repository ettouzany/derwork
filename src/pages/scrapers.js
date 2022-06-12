import Head from 'next/head';
import { Box, Container, Grid, Pagination } from '@mui/material';
import { scrapers } from '../__mocks__/scrapers';
import { ScrapersListToolbar } from '../components/scrapers/scrapers-list-toolbar';
import { ScraperCard } from '../components/scrapers/scraper-card';
import { DashboardLayout } from '../components/dashboard-layout';
// const { spawn } = require('child_process').spawn;
const Scrapers = () => (
    <>
    <Head>
      <title>
        Scrapers | Material Kit
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth={false}>
        <ScrapersListToolbar />
        <Box sx={{ pt: 3 }}>
          <Grid
            container
            spacing={3}
          >
            {scrapers.map((product) => (
              <Grid
                item
                key={product.id}
                lg={4}
                md={6}
                xs={12}
              >
                <ScraperCard product={product} />
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            pt: 3
          }}
        >
          <Pagination
            color="primary"
            count={3}
            size="small"
          />
        </Box>
      </Container>
    </Box>
  </>
);

Scrapers.getLayout = (page) => {

    // const child = 
    return (
    
        <DashboardLayout>
            {page}
        </DashboardLayout>
    )
};

export default Scrapers;