import {
    Typography, Box,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Chip
} from '@mui/material';
import DashboardCard from '@/app/(DashboardLayout)//components/shared/DashboardCard';
import { CheckCircle, HourglassEmpty, Cancel } from '@mui/icons-material';

// Define the type for loan applications
interface LoanApplication {
    id: string;
    name: string;
    loanCategory: string;
    loanAmount: string;
    risk: string;
    pbg: string;
    status: 'Pending' | 'Approved' | 'Rejected'; // Specify the possible status values
}

const LoanApprovalRate: LoanApplication[] = [
    {
        id: "1",
        name: "John Doe",
        loanCategory: "Personal Loan",
        loanAmount: "$5,000",
        risk: "Low",
        pbg: "primary.main",
        status: "Pending",
    },
    {
        id: "2",
        name: "Sarah McDonald",
        loanCategory: "Home Loan",
        loanAmount: "$20,000",
        risk: "Medium",
        pbg: "secondary.main",
        status: "Approved",
    },
    {
        id: "3",
        name: "Christopher Jamil",
        loanCategory: "Auto Loan",
        loanAmount: "$12,800",
        risk: "High",
        pbg: "error.main",
        status: "Rejected",
    },
    {
        id: "4",
        name: "Nirav Joshi",
        loanCategory: "Business Loan",
        loanAmount: "$2,400",
        risk: "Critical",
        pbg: "success.main",
        status: "Approved",
    },
];

// Function to render icon based on the application status
const getStatusIcon = (status: 'Pending' | 'Approved' | 'Rejected') => {
    switch (status) {
        case 'Approved':
            return <CheckCircle sx={{ marginRight: 1, color: '#388E3C' }} />;
        case 'Pending':
            return <HourglassEmpty sx={{ marginRight: 1, color: '#FFB300' }} />;
        case 'Rejected':
            return <Cancel sx={{ marginRight: 1, color: '#D32F2F' }} />;
        default:
            return null;
    }
};

const LoanApplications = () => {
    return (
        <DashboardCard title="Loan Applications">
            <Box sx={{ overflow: 'auto', width: { xs: '280px', sm: 'auto' } }}>
                <Table
                    aria-label="simple table"
                    sx={{
                        whiteSpace: "nowrap",
                        mt: 2
                    }}
                >
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                <Typography variant="subtitle2" fontWeight={600}>
                                    ID
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="subtitle2" fontWeight={600}>
                                    Applicant
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="subtitle2" fontWeight={600}>
                                    Risk
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="subtitle2" fontWeight={600}>
                                    Loan Amount
                                </Typography>
                            </TableCell>
                            <TableCell align="right">
                                <Typography variant="subtitle2" fontWeight={600}>
                                    Status
                                </Typography>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {LoanApprovalRate.map((application) => (
                            <TableRow key={application.id}>
                                <TableCell>
                                    <Typography
                                        sx={{
                                            fontSize: "15px",
                                            fontWeight: "500",
                                        }}
                                    >
                                        {application.id}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                        }}
                                    >
                                        <Box>
                                            <Typography variant="subtitle2" fontWeight={600}>
                                                {application.name}
                                            </Typography>
                                            <Typography
                                                color="textSecondary"
                                                sx={{
                                                    fontSize: "13px",
                                                }}
                                            >
                                                {application.loanCategory} {/* Loan category shown under the name */}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </TableCell>
                                <TableCell>
                                    <Chip
                                        sx={{
                                            px: "4px",
                                            backgroundColor: application.pbg,
                                            color: "#fff",
                                        }}
                                        size="small"
                                        label={application.risk}
                                    />
                                </TableCell>
                                <TableCell>
                                    <Typography variant="h6">{application.loanAmount}</Typography>
                                </TableCell>
                                <TableCell align="right">
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                        }}
                                    >
                                        {getStatusIcon(application.status)}
                                        <Typography variant="subtitle2" fontWeight={600}>
                                            {application.status}
                                        </Typography>
                                    </Box>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Box>
        </DashboardCard>
    );
};

export default LoanApplications;