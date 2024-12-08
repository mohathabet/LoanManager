'use client';
import { Grid, Box } from '@mui/material';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
// components
import LoanApprovalRate from '@/app/(DashboardLayout)/components/dashboard/LoanApprovalRate';
import YearlyBreakup from '@/app/(DashboardLayout)/components/dashboard/YearlyBreakup';
import RecentTransactions from '@/app/(DashboardLayout)/components/dashboard/RecentTransactions';
import LoanApplications from '@/app/(DashboardLayout)/components/dashboard/LoanApplications';
import MonthlyEarnings from '@/app/(DashboardLayout)/components/dashboard/MonthlyEarnings';
import { Chat } from '@mui/icons-material';
import TestComponent from '@/app/(DashboardLayout)/components/dashboard/TestComponent'; // Import TestComponent

const Dashboard = () => {
  return (
    <PageContainer title="Dashboard" description="this is Dashboard">
      <Box>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={8}>
            <LoanApprovalRate />
          </Grid>
          <Grid item xs={12} lg={4}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <YearlyBreakup />
              </Grid>
              <Grid item xs={12}>
                <MonthlyEarnings />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={4}>
            <RecentTransactions />
          </Grid>
          <Grid item xs={12} lg={8}>
            <LoanApplications />
          </Grid>
          <Grid item xs={12}>
            <TestComponent /> {/* Calling TestComponent here */}
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  );
};

export default Dashboard;