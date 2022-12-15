import React from "react";
import PetsIcon from '@mui/icons-material/Pets';
import PersonIcon from '@mui/icons-material/Person';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import DescriptionIcon from '@mui/icons-material/Description';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import SettingsIcon from '@mui/icons-material/Settings';

export const sidebarData = [
    {
        title: "Clientes",
        icons: <PersonIcon />,
        link: "/clientes"
    },
    {
        title: "Animais",
        icons: <PetsIcon />,
        link: "/animais"
    },
    {
        title: "Funcionários",
        icons: <ManageAccountsIcon />,
        link: "/funcionarios"
    },
    {
        title: "Fornecedores",
        icons: <LocalShippingIcon />,
        link: "/fornecedores"
    },
    {
        title: "Vacinas",
        icons: <DescriptionIcon />,
        link: "/vacinas"
    },
    {
        title: "Planos",
        icons: <AddCircleIcon />,
        link: "/planos"
    },
    {
        title: "Agendamentos",
        icons: <CalendarMonthIcon />,
        link: "/agenda"
    },
    {
        title: "Administração",
        icons: <SettingsIcon />,
        link: "/admin"
    }
]