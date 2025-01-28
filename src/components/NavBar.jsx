// import "bootstrap/dist/css/bootstrap.min.css";
// import {
//   Navbar,
//   Nav,
//   Container,
//   Badge,
//   NavDropdown,
//   Button,
// } from "react-bootstrap";
// import {
//   Search,
//   HouseDoorFill,
//   PeopleFill,
//   BriefcaseFill,
//   ChatRightDotsFill,
//   BellFill,
//   Grid3x3GapFill,
//   BrowserSafari,
//   TrophyFill,
//   Table,
//   InfoSquare,
//   PinMapFill,
//   PlayBtnFill,
//   PlusLg,
// } from "react-bootstrap-icons";

// const NavBar = () => {
//   return (
//     <Navbar collapseOnSelect bg="light" expand="lg" className="shadow-sm">
//       <Container fluid className="px-5 m-0">
//         <div className="d-flex align-items-center">
//           <Navbar.Brand href="#">
//             <img
//               src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
//               alt="LinkedIn Logo"
//               height="30"
//             />
//           </Navbar.Brand>
//           <div className="d-flex">
//             <Search size={25} className="mx-3" />
//             <input
//               type="text"
//               placeholder="cerca"
//               className="d-none d-md-block"
//             ></input>
//           </div>
//         </div>

//         <Form className="d-flex align-items-center d-none d-lg-flex">
//           <Search size={25} className="mx-3" />
//           <Form.Control
//             type="search"
//             placeholder="Search"
//             className="me-2"
//             aria-label="Search"
//           />
//         </Form>

//         <div>
//           <Nav>
//             <div className="ms-auto d-flex align-items-center d-none d-lg-flex">
//               <Nav.Link href="#" className="position-relative">
//                 <div className="text-center">
//                   <HouseDoorFill size={25} className="position-relative" />
//                   <Badge
//                     pill
//                     bg="danger"
//                     className="position-absolute translate-middle"
//                   >
//                     1
//                   </Badge>
//                   <Nav.Link href="#">Home</Nav.Link>
//                 </div>
//               </Nav.Link>

//               <Nav.Link href="#" className="position-relative">
//                 <div className="text-center">
//                   <PeopleFill size={25} />
//                   <Nav.Link href="#">Rete</Nav.Link>
//                 </div>
//               </Nav.Link>

//               <Nav.Link href="#" className="position-relative">
//                 <div className="text-center">
//                   <BriefcaseFill size={25} />
//                   <Nav.Link href="#">Lavoro</Nav.Link>
//                 </div>
//               </Nav.Link>

//               <Nav.Link href="#" className="position-relative">
//                 <div className="text-center">
//                   <ChatRightDotsFill size={25} />
//                   <Nav.Link href="#">Messaggistica</Nav.Link>
//                 </div>
//               </Nav.Link>

//               <Nav.Link href="#" className="position-relative">
//                 <div className="text-center">
//                   <BellFill size={25} className="position-relative" />
//                   <Badge
//                     pill
//                     bg="danger"
//                     className="position-absolute translate-middle"
//                   >
//                     3
//                   </Badge>
//                   <Nav.Link href="#">Notifiche</Nav.Link>
//                 </div>
//               </Nav.Link>
//             </div>
//             <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//             <Navbar.Collapse id="responsive-navbar-nav">
//               <Nav className="me-auto">
//                 <div className="d-flex">
//                   <div className="text-center">
//                     <div>
//                       <img
//                         src="https://placecats.com/30/30"
//                         alt="Profilo"
//                         className="rounded-circle img-fluid"
//                         width="25"
//                         height="25"
//                       />
//                     </div>
//                     <div>
//                       <NavDropdown
//                         title="Profile"
//                         id="basic-nav-dropdown"
//                         align="end"
//                         style={{ width: "200px" }}
//                       >
//                         <div className="d-flex align-items-center p-3">
//                           <img
//                             src="https://placecats.com/70/70"
//                             alt="Profilo"
//                             className="rounded-circle"
//                             width="70"
//                             height="70"
//                           />
//                           <div className="ms-4">
//                             <h5>Your Profile</h5>
//                             <p className="m-0">Your description</p>
//                           </div>
//                         </div>
//                         <NavDropdown.Item href="#action/3.3">
//                           <Button
//                             type="button"
//                             className="btnDropdownMenu bg-transparent text-primary w-100 border-1 border-primary rounded-5"
//                           >
//                             Visualizza Profilo
//                           </Button>
//                         </NavDropdown.Item>
//                         <NavDropdown.Divider />
//                         <div>
//                           <h4 className="ps-3">Account</h4>
//                           <NavDropdown.Item href="#">
//                             Impostazioni e privacy
//                           </NavDropdown.Item>
//                           <NavDropdown.Item href="#">Guida</NavDropdown.Item>
//                           <NavDropdown.Item href="#">Lingua</NavDropdown.Item>
//                         </div>
//                         <NavDropdown.Divider />
//                         <div>
//                           <h4 className="ps-3">Gestisci</h4>
//                           <NavDropdown.Item href="#">
//                             Post e attività
//                           </NavDropdown.Item>
//                           <NavDropdown.Item href="#">
//                             Account per la pubblicazione di offerte lavorative
//                           </NavDropdown.Item>
//                           <NavDropdown.Item href="#">Lingua</NavDropdown.Item>
//                         </div>
//                         <NavDropdown.Divider />
//                         <div>
//                           <NavDropdown.Item href="#">Esci</NavDropdown.Item>
//                         </div>
//                       </NavDropdown>
//                     </div>
//                   </div>
//                   <div className="text-center">
//                     <div>
//                       <Grid3x3GapFill size={25} />
//                     </div>
//                     <div>
//                       <NavDropdown
//                         title="Dropdown"
//                         id="basic-nav-dropdown"
//                         align="end"
//                       >
//                         <div className="d-flex containerSecondDropDown">
//                           <div className="boxesSecondDropDown">
//                             <h2>Le mie app</h2>

//                             <div className="d-flex align-items-center">
//                               <BrowserSafari size={40} color="royalblue" />
//                               <NavDropdown.Item className="h4  align-self-end mt-3">
//                                 Vendi
//                               </NavDropdown.Item>
//                             </div>
//                             <div className="d-flex align-items-center">
//                               <PeopleFill size={40} color="royalblue" />
//                               <NavDropdown.Item className="h4  align-self-end mt-3">
//                                 Gruppi
//                               </NavDropdown.Item>
//                             </div>
//                             <h4 className="h5">Talent</h4>
//                             <div className="d-flex align-items-center">
//                               <TrophyFill size={40} color="royalblue" />
//                               <NavDropdown.Item className="h4  align-self-end mt-3">
//                                 Talent Insight
//                               </NavDropdown.Item>
//                             </div>
//                             <div className="d-flex align-items-center">
//                               <Table size={40} color="royalblue" />
//                               <NavDropdown.Item className="h4  align-self-end mt-3">
//                                 Pubblica un&apos;offerta di lavoro
//                               </NavDropdown.Item>
//                             </div>
//                             <h4 className="h5">Vendite</h4>

//                             <div className="d-flex align-items-center">
//                               <InfoSquare size={40} color="royalblue" />
//                               <NavDropdown.Item className="h4  align-self-end mt-3">
//                                 Marketplace dei servizi
//                               </NavDropdown.Item>
//                             </div>

//                             <h4 className="h5">Marketing</h4>

//                             <div className="d-flex align-items-center">
//                               <PinMapFill size={40} color="royalblue" />
//                               <NavDropdown.Item className="h4  align-self-end mt-3">
//                                 Pubblicizza
//                               </NavDropdown.Item>
//                             </div>

//                             <h4 className="h5">Learning</h4>

//                             <div className="d-flex align-items-center">
//                               <PlayBtnFill size={40} color="royalblue" />
//                               <NavDropdown.Item className="h4  align-self-end mt-3">
//                                 Learning
//                               </NavDropdown.Item>
//                             </div>
//                           </div>
//                           <div className="boxesSecondDropDown overflow-scroll">
//                             <h2>Scopri altro per il business</h2>

//                             <NavDropdown.Item className="mt-3">
//                               <h4 className="h5">Assumi su Linkedin</h4>
//                               <p>Trova, attrai e assumi</p>
//                             </NavDropdown.Item>
//                             <NavDropdown.Item className="mt-3">
//                               <h4 className="h5">Vendi con Linkedin</h4>
//                               <p>Sblocca nuove opportunità di vendita</p>
//                             </NavDropdown.Item>
//                             <NavDropdown.Item className="mt-3">
//                               <h4 className="h5">Offerta di lavoro gratuita</h4>
//                               <p>Ottieni rapidamente candidati qualificati</p>
//                             </NavDropdown.Item>
//                             <NavDropdown.Item className="mt-3">
//                               <h4 className="h5">Fai pubblicità su Linkedin</h4>
//                               <p>
//                                 Acquisisci clienti e fai crescere la tua azienda
//                               </p>
//                             </NavDropdown.Item>
//                             <NavDropdown.Item className="mt-3">
//                               <h4 className="h5">Impara con Linkedin</h4>
//                               <p>Corsi per formare i tuoi dipendenti</p>
//                             </NavDropdown.Item>
//                             <NavDropdown.Item className="mt-3">
//                               <h4 className="h5">Admin Center</h4>
//                               <p>
//                                 Gestisci i dettagli di fatturazione e account
//                               </p>
//                             </NavDropdown.Item>
//                             <NavDropdown.Item className="d-flex align-items-center mt-3">
//                               <h4>Crea una pagina aziendale</h4>
//                               <PlusLg size={40} className="ms-3" />
//                             </NavDropdown.Item>
//                           </div>
//                         </div>
//                       </NavDropdown>
//                     </div>
//                   </div>
//                 </div>
//               </Nav>
//             </Navbar.Collapse>
//           </Nav>
//         </div>
//       </Container>
//     </Navbar>
//   );
// };

// export default NavBar;

// return (
//     <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
//       <Container fluid>
//         <Navbar.Brand href="#home">
//           <img
//             src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
//             alt="LinkedIn Logo"
//             height="30"
//           />
//         </Navbar.Brand>
//         <Form className="d-flex align-items-center d-none d-lg-flex">
//           <Search size={25} className="mx-3" />
//           <Form.Control
//             type="search"
//             placeholder="Search"
//             className="me-2"
//             aria-label="Search"
//           />
//         </Form>
//         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//         <Navbar.Collapse id="responsive-navbar-nav">
//           <Nav className="me-auto"></Nav>
//           <Nav>
//             <div className="ms-auto d-flex align-items-center d-none d-lg-flex">
//               <Nav.Link href="#" className="position-relative">
//                 <div className="text-center">
//                   <HouseDoorFill size={25} className="position-relative" />
//                   <Badge
//                     pill
//                     bg="danger"
//                     className="position-absolute translate-middle"
//                   >
//                     1
//                   </Badge>
//                   <p>Home</p>
//                 </div>
//               </Nav.Link>

//               <Nav.Link href="#" className="position-relative">
//                 <div className="text-center">
//                   <PeopleFill size={25} />
//                   <p>Rete</p>
//                 </div>
//               </Nav.Link>

//               <Nav.Link href="#" className="position-relative">
//                 <div className="text-center">
//                   <BriefcaseFill size={25} />
//                   <p>Lavoro</p>
//                 </div>
//               </Nav.Link>

//               <Nav.Link href="#" className="position-relative">
//                 <div className="text-center">
//                   <ChatRightDotsFill size={25} />
//                   <p>Messaggistica</p>
//                 </div>
//               </Nav.Link>

//               <Nav.Link href="#" className="position-relative">
//                 <div className="text-center">
//                   <BellFill size={25} className="position-relative" />
//                   <Badge
//                     pill
//                     bg="danger"
//                     className="position-absolute translate-middle"
//                   >
//                     3
//                   </Badge>
//                   <p>Notifiche</p>
//                 </div>
//               </Nav.Link>
//             </div>
//             <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//             <Navbar.Collapse id="responsive-navbar-nav">
//               <Nav className="me-auto">
//                 <div className="d-flex">
//                   <div className="text-center">
//                     <div>
//                       <img
//                         src="https://placecats.com/30/30"
//                         alt="Profilo"
//                         className="rounded-circle img-fluid"
//                         width="25"
//                         height="25"
//                       />
//                     </div>
//                     <div>
//                       <NavDropdown
//                         title="Profile"
//                         id="basic-nav-dropdown"
//                         align="end"
//                         style={{ width: "200px" }}
//                       >
//                         <div className="d-flex align-items-center p-3">
//                           <img
//                             src="https://placecats.com/70/70"
//                             alt="Profilo"
//                             className="rounded-circle"
//                             width="70"
//                             height="70"
//                           />
//                           <div className="ms-4">
//                             <h5>Your Profile</h5>
//                             <p className="m-0">Your description</p>
//                           </div>
//                         </div>
//                         <NavDropdown.Item href="#action/3.3">
//                           <Button
//                             type="button"
//                             className="btnDropdownMenu bg-transparent text-primary w-100 border-1 border-primary rounded-5"
//                           >
//                             Visualizza Profilo
//                           </Button>
//                         </NavDropdown.Item>
//                         <NavDropdown.Divider />
//                         <div>
//                           <h4 className="ps-3">Account</h4>
//                           <NavDropdown.Item href="#">
//                             Impostazioni e privacy
//                           </NavDropdown.Item>
//                           <NavDropdown.Item href="#">Guida</NavDropdown.Item>
//                           <NavDropdown.Item href="#">Lingua</NavDropdown.Item>
//                         </div>
//                         <NavDropdown.Divider />
//                         <div>
//                           <h4 className="ps-3">Gestisci</h4>
//                           <NavDropdown.Item href="#">
//                             Post e attività
//                           </NavDropdown.Item>
//                           <NavDropdown.Item href="#">
//                             Account per la pubblicazione di offerte lavorative
//                           </NavDropdown.Item>
//                           <NavDropdown.Item href="#">Lingua</NavDropdown.Item>
//                         </div>
//                         <NavDropdown.Divider />
//                         <div>
//                           <NavDropdown.Item href="#">Esci</NavDropdown.Item>
//                         </div>
//                       </NavDropdown>
//                     </div>
//                   </div>
//                   <div className="text-center">
//                     <div>
//                       <Grid3x3GapFill size={25} />
//                     </div>
//                     <div>
//                       <NavDropdown
//                         title="Dropdown"
//                         id="basic-nav-dropdown"
//                         align="end"
//                       >
//                         <div className="d-flex containerSecondDropDown">
//                           <div className="boxesSecondDropDown">
//                             <h2>Le mie app</h2>

//                             <div className="d-flex align-items-center">
//                               <BrowserSafari size={40} color="royalblue" />
//                               <NavDropdown.Item className="h4  align-self-end mt-3">
//                                 Vendi
//                               </NavDropdown.Item>
//                             </div>
//                             <div className="d-flex align-items-center">
//                               <PeopleFill size={40} color="royalblue" />
//                               <NavDropdown.Item className="h4  align-self-end mt-3">
//                                 Gruppi
//                               </NavDropdown.Item>
//                             </div>
//                             <h4 className="h5">Talent</h4>
//                             <div className="d-flex align-items-center">
//                               <TrophyFill size={40} color="royalblue" />
//                               <NavDropdown.Item className="h4  align-self-end mt-3">
//                                 Talent Insight
//                               </NavDropdown.Item>
//                             </div>
//                             <div className="d-flex align-items-center">
//                               <Table size={40} color="royalblue" />
//                               <NavDropdown.Item className="h4  align-self-end mt-3">
//                                 Pubblica un&apos;offerta di lavoro
//                               </NavDropdown.Item>
//                             </div>
//                             <h4 className="h5">Vendite</h4>

//                             <div className="d-flex align-items-center">
//                               <InfoSquare size={40} color="royalblue" />
//                               <NavDropdown.Item className="h4  align-self-end mt-3">
//                                 Marketplace dei servizi
//                               </NavDropdown.Item>
//                             </div>

//                             <h4 className="h5">Marketing</h4>

//                             <div className="d-flex align-items-center">
//                               <PinMapFill size={40} color="royalblue" />
//                               <NavDropdown.Item className="h4  align-self-end mt-3">
//                                 Pubblicizza
//                               </NavDropdown.Item>
//                             </div>

//                             <h4 className="h5">Learning</h4>

//                             <div className="d-flex align-items-center">
//                               <PlayBtnFill size={40} color="royalblue" />
//                               <NavDropdown.Item className="h4  align-self-end mt-3">
//                                 Learning
//                               </NavDropdown.Item>
//                             </div>
//                           </div>
//                           <div className="boxesSecondDropDown overflow-scroll">
//                             <h2>Scopri altro per il business</h2>

//                             <NavDropdown.Item className="mt-3">
//                               <h4 className="h5">Assumi su Linkedin</h4>
//                               <p>Trova, attrai e assumi</p>
//                             </NavDropdown.Item>
//                             <NavDropdown.Item className="mt-3">
//                               <h4 className="h5">Vendi con Linkedin</h4>
//                               <p>Sblocca nuove opportunità di vendita</p>
//                             </NavDropdown.Item>
//                             <NavDropdown.Item className="mt-3">
//                               <h4 className="h5">Offerta di lavoro gratuita</h4>
//                               <p>Ottieni rapidamente candidati qualificati</p>
//                             </NavDropdown.Item>
//                             <NavDropdown.Item className="mt-3">
//                               <h4 className="h5">Fai pubblicità su Linkedin</h4>
//                               <p>
//                                 Acquisisci clienti e fai crescere la tua azienda
//                               </p>
//                             </NavDropdown.Item>
//                             <NavDropdown.Item className="mt-3">
//                               <h4 className="h5">Impara con Linkedin</h4>
//                               <p>Corsi per formare i tuoi dipendenti</p>
//                             </NavDropdown.Item>
//                             <NavDropdown.Item className="mt-3">
//                               <h4 className="h5">Admin Center</h4>
//                               <p>
//                                 Gestisci i dettagli di fatturazione e account
//                               </p>
//                             </NavDropdown.Item>
//                             <NavDropdown.Item className="d-flex align-items-center mt-3">
//                               <h4>Crea una pagina aziendale</h4>
//                               <PlusLg size={40} className="ms-3" />
//                             </NavDropdown.Item>
//                           </div>
//                         </div>
//                       </NavDropdown>
//                     </div>
//                   </div>
//                 </div>
//               </Nav>
//             </Navbar.Collapse>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );

//   <Nav
//             className="me-auto my-2 my-lg-0"
//             style={{ maxHeight: "100px" }}
//             navbarScroll
//           >
//             <Nav.Link href="#">
//               <div className="text-center">
//                 <HouseDoorFill size={25} className="position-relative" />
//                 <Badge
//                   pill
//                   bg="danger"
//                   className="position-absolute translate-middle"
//                 >
//                   1
//                 </Badge>
//                 <p>Home</p>
//               </div>
//             </Nav.Link>
//             <Nav.Link href="#">
//               <div className="text-center">
//                 <PeopleFill size={25} />
//                 <p>Rete</p>
//               </div>
//             </Nav.Link>
//             <Nav.Link href="#">
//               <div className="text-center">
//                 <BriefcaseFill size={25} />
//                 <p>Lavoro</p>
//               </div>
//             </Nav.Link>
//             <Nav.Link href="#" className="position-relative">
//               <div className="text-center">
//                 <ChatRightDotsFill size={25} />
//                 <p>Messaggistica</p>
//               </div>
//             </Nav.Link>
//             <Nav.Link href="#" className="position-relative">
//               <div className="text-center">
//                 <BellFill size={25} className="position-relative" />
//                 <Badge
//                   pill
//                   bg="danger"
//                   className="position-absolute translate-middle"
//                 >
//                   3
//                 </Badge>
//                 <p>Notifiche</p>
//               </div>
//             </Nav.Link>
//             <div className="text-center">
//               <div>
//                 <img
//                   src="https://placecats.com/30/30"
//                   alt="Profilo"
//                   className="rounded-circle img-fluid"
//                   width="25"
//                   height="25"
//                 />
//               </div>
//               <div>
//                 <NavDropdown
//                   title="Profile"
//                   id="basic-nav-dropdown"
//                   align="end"
//                 >
//                   <div className="d-flex align-items-center p-3">
//                     <img
//                       src="https://placecats.com/70/70"
//                       alt="Profilo"
//                       className="rounded-circle"
//                       width="70"
//                       height="70"
//                     />
//                     <div className="ms-4">
//                       <h5>Your Profile</h5>
//                       <p className="m-0">Your description</p>
//                     </div>
//                   </div>
//                   <NavDropdown.Item href="#">
//                     <Button
//                       type="button"
//                       className="btnDropdownMenu bg-transparent text-primary w-100 border-1 border-primary rounded-5"
//                     >
//                       Visualizza Profilo
//                     </Button>
//                   </NavDropdown.Item>
//                   <NavDropdown.Divider />
//                   <div>
//                     <h4 className="ps-3">Account</h4>
//                     <NavDropdown.Item href="#">
//                       Impostazioni e privacy
//                     </NavDropdown.Item>
//                     <NavDropdown.Item href="#">Guida</NavDropdown.Item>
//                     <NavDropdown.Item href="#">Lingua</NavDropdown.Item>
//                   </div>
//                   <NavDropdown.Divider />
//                   <div>
//                     <h4 className="ps-3">Gestisci</h4>
//                     <NavDropdown.Item href="#">
//                       Post e attività
//                     </NavDropdown.Item>
//                     <NavDropdown.Item href="#">
//                       Account per la pubblicazione di offerte lavorative
//                     </NavDropdown.Item>
//                     <NavDropdown.Item href="#">Lingua</NavDropdown.Item>
//                   </div>
//                   <NavDropdown.Divider />
//                   <div>
//                     <NavDropdown.Item href="#">Esci</NavDropdown.Item>
//                   </div>
//                 </NavDropdown>
//               </div>
//             </div>
//             <div className="text-center">
//               <div>
//                 <Grid3x3GapFill size={25} />
//               </div>
//               <div>
//                 <NavDropdown
//                   title="Dropdown"
//                   id="basic-nav-dropdown"
//                   align="end"
//                 >
//                   <div className="d-flex containerSecondDropDown">
//                     <div className="boxesSecondDropDown">
//                       <h2>Le mie app</h2>

//                       <div className="d-flex align-items-center">
//                         <BrowserSafari size={40} color="royalblue" />
//                         <NavDropdown.Item className="h4  align-self-end mt-3">
//                           Vendi
//                         </NavDropdown.Item>
//                       </div>
//                       <div className="d-flex align-items-center">
//                         <PeopleFill size={40} color="royalblue" />
//                         <NavDropdown.Item className="h4  align-self-end mt-3">
//                           Gruppi
//                         </NavDropdown.Item>
//                       </div>
//                       <h4 className="h5">Talent</h4>
//                       <div className="d-flex align-items-center">
//                         <TrophyFill size={40} color="royalblue" />
//                         <NavDropdown.Item className="h4  align-self-end mt-3">
//                           Talent Insight
//                         </NavDropdown.Item>
//                       </div>
//                       <div className="d-flex align-items-center">
//                         <Table size={40} color="royalblue" />
//                         <NavDropdown.Item className="h4  align-self-end mt-3">
//                           Pubblica un&apos;offerta di lavoro
//                         </NavDropdown.Item>
//                       </div>
//                       <h4 className="h5">Vendite</h4>

//                       <div className="d-flex align-items-center">
//                         <InfoSquare size={40} color="royalblue" />
//                         <NavDropdown.Item className="h4  align-self-end mt-3">
//                           Marketplace dei servizi
//                         </NavDropdown.Item>
//                       </div>

//                       <h4 className="h5">Marketing</h4>

//                       <div className="d-flex align-items-center">
//                         <PinMapFill size={40} color="royalblue" />
//                         <NavDropdown.Item className="h4  align-self-end mt-3">
//                           Pubblicizza
//                         </NavDropdown.Item>
//                       </div>

//                       <h4 className="h5">Learning</h4>

//                       <div className="d-flex align-items-center">
//                         <PlayBtnFill size={40} color="royalblue" />
//                         <NavDropdown.Item className="h4  align-self-end mt-3">
//                           Learning
//                         </NavDropdown.Item>
//                       </div>
//                     </div>
//                     <div className="boxesSecondDropDown overflow-scroll">
//                       <h2>Scopri altro per il business</h2>

//                       <NavDropdown.Item className="mt-3">
//                         <h4 className="h5">Assumi su Linkedin</h4>
//                         <p>Trova, attrai e assumi</p>
//                       </NavDropdown.Item>
//                       <NavDropdown.Item className="mt-3">
//                         <h4 className="h5">Vendi con Linkedin</h4>
//                         <p>Sblocca nuove opportunità di vendita</p>
//                       </NavDropdown.Item>
//                       <NavDropdown.Item className="mt-3">
//                         <h4 className="h5">Offerta di lavoro gratuita</h4>
//                         <p>Ottieni rapidamente candidati qualificati</p>
//                       </NavDropdown.Item>
//                       <NavDropdown.Item className="mt-3">
//                         <h4 className="h5">Fai pubblicità su Linkedin</h4>
//                         <p>Acquisisci clienti e fai crescere la tua azienda</p>
//                       </NavDropdown.Item>
//                       <NavDropdown.Item className="mt-3">
//                         <h4 className="h5">Impara con Linkedin</h4>
//                         <p>Corsi per formare i tuoi dipendenti</p>
//                       </NavDropdown.Item>
//                       <NavDropdown.Item className="mt-3">
//                         <h4 className="h5">Admin Center</h4>
//                         <p>Gestisci i dettagli di fatturazione e account</p>
//                       </NavDropdown.Item>
//                       <NavDropdown.Item className="d-flex align-items-center mt-3">
//                         <h4>Crea una pagina aziendale</h4>
//                         <PlusLg size={40} className="ms-3" />
//                       </NavDropdown.Item>
//                     </div>
//                   </div>
//                 </NavDropdown>
//               </div>
//             </div>
//           </Nav>
