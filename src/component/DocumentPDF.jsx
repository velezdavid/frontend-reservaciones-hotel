import React from "react";
import { Document, Page, Text, View, Image } from "@react-pdf/renderer";
import PropTypes from "prop-types";
import { useState } from "react";
import { useEffect } from "react";

const DocumentoPDF = ({ data }) => {
  // console.log("pdf", data);
  // const [myData, setMyData] = useState({});
  // useEffect(() => {
  //   setMyData(data);
  // }, [data]);

  return (
    <Document>
      {Object.keys(data).length > 0 ? (
        <Page size="A4">
          <View style={{ backgroundColor: "#f7fafc", padding: 20 }}>
            <View
              style={{
                backgroundColor: "#fff",
                borderRadius: 4,
                padding: 20,
                marginBottom: 20,
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Text
                style={{
                  color: "#3388af",
                  fontSize: 24,
                  fontWeight: "bold",
                  marginBottom: 10,
                  textAlign: "center",
                }}
              >
                Reservacion Mare S&M Hostal
              </Text>
              <View
                style={{
                  marginBottom: 10,
                  borderBottom: "1px solid #e2e8f0",
                  paddingBottom: 10,
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                  gap: 10,
                }}
              >
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Datos de Usuario
                </Text>
                <Text style={{ fontSize: 12 }}>
                  <Text style={{ fontWeight: "bold" }}>Nombre completo:</Text>{" "}
                  Juan Pérez
                </Text>
                <Text style={{ fontSize: 12 }}>
                  <Text style={{ fontWeight: "bold" }}>Cédula:</Text> 1234567890
                </Text>
                <Text style={{ fontSize: 12 }}>
                  <Text style={{ fontWeight: "bold" }}>
                    Correo electrónico:
                  </Text>{" "}
                  juan@example.com
                </Text>
                <Text style={{ fontSize: 12 }}>
                  <Text style={{ fontWeight: "bold" }}>Teléfono:</Text>{" "}
                  0987888772
                </Text>
              </View>
              <View
                style={{
                  marginBottom: 10,
                  borderBottom: "1px solid #e2e8f0",
                  paddingBottom: 10,
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                  gap: 10,
                }}
              >
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Datos de habitación
                </Text>
                <Text style={{ fontSize: 12 }}>
                  <Text style={{ fontWeight: "bold" }}>COD. Habitación:</Text>{" "}
                  HTYR233
                </Text>
                <Text style={{ fontSize: 12 }}>
                  <Text style={{ fontWeight: "bold" }}>Categoría:</Text> Simple
                </Text>
                <Text style={{ fontSize: 12 }}>
                  <Text style={{ fontWeight: "bold" }}>Precio:</Text> $35.00
                </Text>
              </View>
              <View
                style={{
                  marginBottom: 10,
                  borderBottom: "1px solid #e2e8f0",
                  paddingBottom: 10,
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                  gap: 10,
                }}
              >
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Datos de reserva
                </Text>
                <Text style={{ fontSize: 12 }}>
                  <Text style={{ fontWeight: "bold" }}>
                    Fecha de reservación:
                  </Text>
                  ghgh
                </Text>
                <Text style={{ fontSize: 12 }}>
                  <Text style={{ fontWeight: "bold" }}>Fecha de entrada:</Text>{" "}
                  entrada
                </Text>
                <Text style={{ fontSize: 12 }}>
                  <Text style={{ fontWeight: "bold" }}>Fecha de salida:</Text>{" "}
                  salida
                </Text>
              </View>
              <View
                style={{
                  marginTop: 20,
                  borderTop: "1px solid #e2e8f0",
                  paddingTop: 10,
                }}
              >
                <Text
                  style={{
                    fontSize: 12,
                    color: "#718096",
                    textAlign: "justify",
                  }}
                >
                  Nota: Por favor, recuerde que es obligatorio presentarse con
                  su cédula de identidad u otro documento de identificación
                  válido al momento del check-in en el hotel. Asegúrese de tener
                  los documentos necesarios antes de su llegada.
                </Text>
              </View>
            </View>
            <View style={{ textAlign: "center" }}>
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/d/d7/Commons_QR_code.png"
                alt="Código QR"
                style={{ width: 200, height: 200, margin: "auto" }}
              />
            </View>
          </View>
          <View
            style={{
              position: "absolute",
              bottom: 40,
              left: 0,
              right: 0,
              textAlign: "center",
              fontSize: 10,
              color: "#718096",
            }}
          >
            <Text>© Mare S&amp;M Hostal Todos los derechos reservados</Text>
          </View>
        </Page>
      ) : (
        <Page></Page>
      )}
    </Document>
  );
};
DocumentoPDF.propTypes = {
  data: PropTypes.object,
};
export default DocumentoPDF;
