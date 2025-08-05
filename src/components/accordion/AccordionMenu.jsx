import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./Accordion.css";
export default function AccordionExpandDefault() {
  const accordionList = [
    {
      id: "1",
      title: "Yotoq xona mebellari",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendissemalesuada lacus ex, sit amet blandit leo lobortis eget",
    },
    {
      id: "2",
      title: "Oshxona mebellari",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendissemalesuada lacus ex, sit amet blandit leo lobortis eget",
    },
    {
      id: "3",
      title: "Mehmon xona mebellari",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendissemalesuada lacus ex, sit amet blandit leo lobortis eget",
    },
    {
      id: "4",
      title: "Ofis mebellari",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendissemalesuada lacus ex, sit amet blandit leo lobortis eget",
    },
    {
      id: "5",
      title: "Bolalar xonasi mebellari",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendissemalesuada lacus ex, sit amet blandit leo lobortis eget",
    },
  ];
  return (
    <div className="accordion-menu">
      <h1>Kategoriyalar</h1>

      {accordionList?.map((value) => (
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${value.id}-content`}
            // id="panel2-header"
            id={`panel${value.id}-header`}
            key={value.id}
          >
            <Typography component="span">{value.title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{value.text}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
