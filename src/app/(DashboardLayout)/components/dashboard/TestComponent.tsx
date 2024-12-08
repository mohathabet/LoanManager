import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { useTheme } from '@mui/material/styles';
import { Stack, Typography, Avatar, Fab } from '@mui/material';
import { IconArrowDownRight, IconCurrencyDollar } from '@tabler/icons-react';
import DashboardCard from '@/app/(DashboardLayout)/components/shared/DashboardCard';

const RepaymentTrend = () => {
  // chart color
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const primaryLight = '#E8F5E9';
  const errorLight = '#FFEBEE';

  // chart options
  const optionsBarChart: any = {
    chart: {
      type: 'bar',
      fontFamily: "'Plus Jakarta Sans', sans-serif;",
      foreColor: '#adb0bb',
      toolbar: {
        show: false,
      },
      height: 200,
      sparkline: {
        enabled: true,
      },
      group: 'sparklines',
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '60%',
        endingShape: 'rounded',
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent'],
    },
    fill: {
      opacity: 0.8,
    },
    colors: [primary],
    tooltip: {
      theme: theme.palette.mode === 'dark' ? 'dark' : 'light',
      x: { show: false },
    },
  };

  const seriesBarChart: any = [
    {
      name: 'Repayment Trend',
      data: [8, 15, 12, 25, 20, 30, 27],
    },
  ];

  return (
    <DashboardCard
      title="Repayment Trend"
      action={
        <Fab color="primary" size="medium" sx={{ color: '#ffffff' }}>
          <IconCurrencyDollar width={24} />
        </Fab>
      }
      footer={
        <Chart options={optionsBarChart} series={seriesBarChart} type="bar" height={200} width={"100%"} />
      }
    >
      <>
        <Typography variant="h3" fontWeight="700" mt="-20px">
          $9,250
        </Typography>
        <Stack direction="row" spacing={1} my={1} alignItems="center">
          <Avatar sx={{ bgcolor: errorLight, width: 27, height: 27 }}>
            <IconArrowDownRight width={20} color="#FA896B" />
          </Avatar>
          <Typography variant="subtitle2" fontWeight="600">
            +20%
          </Typography>
          <Typography variant="subtitle2" color="textSecondary">
            compared to last quarter
          </Typography>
        </Stack>
      </>
    </DashboardCard>
  );
};

export default RepaymentTrend;