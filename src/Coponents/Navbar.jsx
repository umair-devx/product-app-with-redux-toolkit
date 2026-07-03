import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined'; // Beautiful Logo Icon
import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const settings = ["Login", "Register", "Products", "Cart"];

function ResponsiveAppBar() {
  const cartItems = useSelector((state) => state.cart);

  const cartCount = cartItems.reduce(
    (acc, item) => acc + item.quantity,
    0
  );

  const pages = [
    {
      label: "Login",
      path: "/",
    },
    {
      label: "Register",
      path: "/Register",
    },
    {
      label: "Products",
      path: "/products",
    },
    {
      label: "Cart",
      path: "/Cart",
      isCart: true, // Target for special cart styling
    },
  ];

  const navigate = useNavigate();

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = (path) => {
    setAnchorElNav(null);
    navigate(path);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar 
      position="sticky" 
      elevation={0}
      sx={{
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        backdropFilter: "blur(12px)", // Premium glassmorphism effect
        borderBottom: "1px solid rgba(0, 0, 0, 0.06)",
        color: "#1a202c"
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ minHeight: "70px !important" }}>
          
          {/* Desktop Logo */}
          <ShoppingBagOutlinedIcon
            sx={{
              display: { xs: "none", md: "flex" },
              mr: 1.5,
              color: "#1976d2",
              fontSize: "1.8rem"
            }}
          />

          <Typography
            variant="h6"
            noWrap
            sx={{
              mr: 4,
              display: { xs: "none", md: "flex" },
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 800,
              letterSpacing: ".1rem",
              background: "linear-gradient(45deg, #0d47a1, #1976d2)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              cursor: "pointer"
            }}
            onClick={() => navigate("/products")}
          >
            STORE
          </Typography>

          {/* Mobile Menu Icon */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
            }}
          >
            <IconButton
              size="large"
              color="inherit"
              onClick={handleOpenNavMenu}
              sx={{ '&:hover': { bgcolor: 'rgba(0,0,0,0.04)' } }}
            >
              <MenuIcon sx={{ color: "#1a202c" }} />
            </IconButton>

            <Menu
              anchorEl={anchorElNav}
              open={Boolean(anchorElNav)}
              onClose={() => setAnchorElNav(null)}
              anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
              transformOrigin={{ vertical: "top", horizontal: "left" }}
              PaperProps={{
                sx: {
                  mt: 1.5,
                  borderRadius: "16px",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                  minWidth: "180px"
                }
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page.path}
                  onClick={() => handleCloseNavMenu(page.path)}
                  sx={{ py: 1.5, borderRadius: "8px", mx: 1, my: 0.5 }}
                >
                  <Typography textAlign="center" fontWeight="600" sx={{ color: "#4a5568" }}>
                    {page.label} {page.isCart && `(${cartCount})`}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Mobile Logo */}
          <ShoppingBagOutlinedIcon
            sx={{
              display: { xs: "flex", md: "none" },
              mr: 1,
              color: "#1976d2"
            }}
          />

          <Typography
            variant="h5"
            noWrap
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 800,
              letterSpacing: ".1rem",
              background: "linear-gradient(45deg, #0d47a1, #1976d2)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            STORE
          </Typography>

          {/* Desktop Navigation Menu Links */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              gap: 3
            }}
          >
            {pages.map((page) => (
              <Button
                key={page.path}
                onClick={() => handleCloseNavMenu(page.path)}
                sx={{
                  my: 2,
                  color: "#4a5568",
                  display: "flex",
                  alignItems: "center",
                  fontWeight: "600",
                  textTransform: "none",
                  fontSize: "0.95rem",
                  position: "relative",
                  transition: "color 0.2s ease",
                  // Animated underline on hover
                  "&::after": {
                    content: "''",
                    position: "absolute",
                    width: "0%",
                    height: "2px",
                    bottom: "4px",
                    left: "0",
                    backgroundColor: "#1976d2",
                    transition: "width 0.3s ease"
                  },
                  "&:hover": {
                    color: "#1976d2",
                    backgroundColor: "transparent",
                    "&::after": {
                      width: "100%"
                    }
                  },
                }}
              >
                {page.isCart ? (
                  <Box sx={{ display: "flex", alignItems: "center", gap: 0.8 }}>
                    <span>{page.label}</span>
                    <Badge 
                      badgeContent={cartCount} 
                      color="primary"
                      max={99}
                      sx={{
                        '& .MuiBadge-badge': {
                          fontWeight: 'bold',
                          fontSize: '0.75rem'
                        }
                      }}
                    >
                      <ShoppingCartOutlinedIcon sx={{ fontSize: "1.2rem", mb: 0.2 }} />
                    </Badge>
                  </Box>
                ) : (
                  page.label
                )}
              </Button>
            ))}
          </Box>

          {/* User Settings Dropdown */}
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton
                onClick={handleOpenUserMenu}
                sx={{ 
                  p: '4px',
                  border: '2px solid rgba(25, 118, 210, 0.2)',
                  transition: 'all 0.2s ease',
                  '&:hover': {
                    borderColor: '#1976d2',
                    transform: 'scale(1.05)'
                  }
                }}
              >
                <Avatar sx={{ width: 34, height: 34, bgcolor: "#1976d2" }} />
              </IconButton>
            </Tooltip>

            <Menu
              sx={{ mt: "50px" }}
              anchorEl={anchorElUser}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
              anchorOrigin={{ vertical: "top", horizontal: "right" }}
              transformOrigin={{ vertical: "top", horizontal: "right" }}
              PaperProps={{
                sx: {
                  borderRadius: "16px",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                  minWidth: "150px",
                  p: 0.5
                }
              }}
            >
              {settings.map((setting) => (
                <MenuItem
                  key={setting}
                  onClick={handleCloseUserMenu}
                  sx={{ py: 1, borderRadius: "8px", fontWeight: "500", color: "#4a5568" }}
                >
                  <Typography textAlign="center" fontSize="0.95rem">
                    {setting}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;