const converter = require("xml-js");
const fs = require("fs");

// converter settings
const options = {
  ignoreComment: true,
  alwaysChildren: true,
  compact: true,
  ignoreDeclaration: true,
};
const optionsToSave = {
  ignoreComment: true,
  alwaysChildren: true,
  compact: true,
};
const xmlsDir = "./XMLs/";

// ALL
exports.xml_get_all_data = (req, res) => {
  const files = fs.readdirSync(xmlsDir);
  const responseObject = [];
  async function objecter() {
    for (const file of files) {
      const result = converter.xml2js(fs.readFileSync(xmlsDir + file), options);
      responseObject.push(result);
    }
  }

  objecter()
    .then(res.send(responseObject))
    .catch((error) => {
      console.log(error);
    });
};

// PACJENCI GET
exports.xml_get_pacjenci = (req, res) => {
  const files = fs.readdirSync(xmlsDir);
  const responseObject = [];
  for (const file of files) {
    const result = converter.xml2js(fs.readFileSync(xmlsDir + file), options);
    responseObject.push(result.pacjent);
  }
  res.send(responseObject);
};

exports.xml_get_pacjent_by_id = (req, res) => {
  const id = req.params.pacjentId;
  const files = fs.readdirSync(xmlsDir);
  var responseObject = [];
  for (const file of files) {
    const result = converter.xml2js(fs.readFileSync(xmlsDir + file), options);
    if (result.pacjent._attributes.id === id) {
      responseObject = result;
    }
  }
  res.send(responseObject);
};

// PACJENT POST
exports.xml_post_pacjent = (req, res) => {
  const pacjent = {
    _declaration: {
      _attributes: {
        version: "1.0",
        encoding: "UTF-8",
      },
    },
    pacjent: {
      _attributes: {
        id: req.body.pesel,
      },
      pacjentInfo: {
        imie: {
          _text: req.body.imie,
        },
        nazwisko: {
          _text: req.body.nazwisko,
        },
        dataUrodzenia: {
          _text: req.body.dataUrodzenia,
        },
        plec: {
          _text: req.body.plec,
        },
        pesel: {
          _text: req.body.pesel,
        },
        kontakt: {
          _text: req.body.kontakt,
        },
        grupaKrwi: {
          _text: req.body.grupaKrwi,
        },
        choroba: {
          rozpoznanie: {
            nazwaChoroby: {
              _text: req.body.nazwaChoroby,
            },
            symptomy: {
              _text: req.body.symptomy,
            },
          },
          sposobLeczenia: {
            leki: {
              lek: {
                nazwaLeku: {
                  _text: req.body.nazwaLeku,
                },
                dawkowanie: {
                  _text: req.body.dawkowanie,
                },
              },
            },
            badania: {
              nazwaBadania: {
                _text: req.body.nazwaBadania,
              },
              lekarzWykonujacy: {
                _text: req.body.lekarzWykonujacyBadania,
              },
              dataBadania: {
                _text: req.body.dataBadania,
              },
            },
            zabiegi: {
              nazwaZabiegu: {
                _text: req.body.nazwaZabiegu,
              },
              lekarzWykonujacy: {
                _text: req.body.lekarzWykonujacyZabieg,
              },
              dataZabiegu: {
                _text: req.body.dataZabiegu,
              },
            },
          },
        },
      },
      zespolMedyczny: {
        lekarz: {
          _attributes: {
            id: req.body.lekarzId,
          },
          imie: {
            _text: req.body.lekarzImie,
          },
          nazwisko: {
            _text: req.body.lekarzNazwisko,
          },
          specjalizacja: {
            _text: req.body.lekarzSpecjalizacja,
          },
          pokoj: {
            _text: req.body.lekarzPokoj,
          },
        },
      },
      opiekaMedyczna: {
        pielegniarka: {
          _attributes: {
            id: req.body.pielegniarkaId,
          },
          imie: {
            _text: req.body.pielegniarkaImie,
          },
          nazwisko: {
            _text: req.body.pielegniarkaNazwisko,
          },
          specjalizacja: {
            _text: req.body.pielegniarkaSpecjalizacja,
          },
        },
      },
    },
  };

  const pacjentToXml = converter.js2xml(pacjent, optionsToSave);
  fs.writeFileSync(
    xmlsDir + pacjent.pacjent._attributes.id + ".xml",
    pacjentToXml
  );

  res.send(pacjent.pacjent._attributes.id);
};

// ZESPOL MEDYCZNY GET
exports.xml_get_zespolmedyczny = (req, res) => {
  const files = fs.readdirSync(xmlsDir);
  const responseObject = [];
  for (const file of files) {
    const result = converter.xml2js(fs.readFileSync(xmlsDir + file), options);
    responseObject.push(result.pacjent.zespolMedyczny.lekarz);
  }
  res.send(responseObject);
};

// OPIEKA MEDYCZNA GET
exports.xml_get_opiekamedyczna = (req, res) => {
  const files = fs.readdirSync(xmlsDir);
  const responseObject = [];
  for (const file of files) {
    const result = converter.xml2js(fs.readFileSync(xmlsDir + file), options);
    responseObject.push(result.pacjent.opiekaMedyczna.pielegniarka);
  }
  res.send(responseObject);
};
