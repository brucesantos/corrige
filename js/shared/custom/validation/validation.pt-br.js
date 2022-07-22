(function (global, factory) { typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory() : typeof define === "function" && define.amd ? define(factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, global.FormValidation = global.FormValidation || {}, global.FormValidation.locales = global.FormValidation.locales || {}, global.FormValidation.locales.pt_BR = factory()) })(this, (function () {
    "use strict"; var pt_BR = {
        base64: { default: "Please enter a valid base 64 encoded" },
        between: { default: "Please enter a value between %s and %s", notInclusive: "Please enter a value between %s and %s strictly" },
        bic: { default: "Please enter a valid BIC number" },
        callback: { default: "Please enter a valid value" },
        choice: { between: "Please choose %s - %s options", default: "Please enter a valid value", less: "Please choose %s options at minimum", more: "Please choose %s options at maximum" },
        color: { default: "Please enter a valid color" },
        creditCard: { default: "Please enter a valid credit card number" },
        cusip: { default: "Please enter a valid CUSIP number" },
        date: { default: "Please enter a valid date", max: "Please enter a date before %s", min: "Please enter a date after %s", range: "Please enter a date in the range %s - %s" },
        different: { default: "Please enter a different value" },
        digits: { default: "Please enter only digits" },
        ean: { default: "Please enter a valid EAN number" },
        ein: { default: "Please enter a valid EIN number" },
        emailAddress: { default: "Please enter a valid email address" },
        file: { default: "Please choose a valid file" },
        greaterThan: { default: "Por favor, forne&ccedil;a um valor maior ou igual a %s", notInclusive: "Por favor, forne&ccedil;a um valor maior que %s" },
        grid: { default: "Please enter a valid GRId number" },
        hex: { default: "Please enter a valid hexadecimal number" },
        iban: { countries: { AD: "Andorra", AE: "United Arab Emirates", AL: "Albania", AO: "Angola", AT: "Austria", AZ: "Azerbaijan", BA: "Bosnia and Herzegovina", BE: "Belgium", BF: "Burkina Faso", BG: "Bulgaria", BH: "Bahrain", BI: "Burundi", BJ: "Benin", BR: "Brazil", CH: "Switzerland", CI: "Ivory Coast", CM: "Cameroon", CR: "Costa Rica", CV: "Cape Verde", CY: "Cyprus", CZ: "Czech Republic", DE: "Germany", DK: "Denmark", DO: "Dominican Republic", DZ: "Algeria", EE: "Estonia", ES: "Spain", FI: "Finland", FO: "Faroe Islands", FR: "France", GB: "United Kingdom", GE: "Georgia", GI: "Gibraltar", GL: "Greenland", GR: "Greece", GT: "Guatemala", HR: "Croatia", HU: "Hungary", IE: "Ireland", IL: "Israel", IR: "Iran", IS: "Iceland", IT: "Italy", JO: "Jordan", KW: "Kuwait", KZ: "Kazakhstan", LB: "Lebanon", LI: "Liechtenstein", LT: "Lithuania", LU: "Luxembourg", LV: "Latvia", MC: "Monaco", MD: "Moldova", ME: "Montenegro", MG: "Madagascar", MK: "Macedonia", ML: "Mali", MR: "Mauritania", MT: "Malta", MU: "Mauritius", MZ: "Mozambique", NL: "Netherlands", NO: "Norway", PK: "Pakistan", PL: "Poland", PS: "Palestine", PT: "Portugal", QA: "Qatar", RO: "Romania", RS: "Serbia", SA: "Saudi Arabia", SE: "Sweden", SI: "Slovenia", SK: "Slovakia", SM: "San Marino", SN: "Senegal", TL: "East Timor", TN: "Tunisia", TR: "Turkey", VG: "Virgin Islands, British", XK: "Republic of Kosovo" }, country: "Please enter a valid IBAN number in %s", default: "Please enter a valid IBAN number" }, id: { countries: { BA: "Bosnia and Herzegovina", BG: "Bulgaria", BR: "Brazil", CH: "Switzerland", CL: "Chile", CN: "China", CZ: "Czech Republic", DK: "Denmark", EE: "Estonia", ES: "Spain", FI: "Finland", HR: "Croatia", IE: "Ireland", IS: "Iceland", LT: "Lithuania", LV: "Latvia", ME: "Montenegro", MK: "Macedonia", NL: "Netherlands", PL: "Poland", RO: "Romania", RS: "Serbia", SE: "Sweden", SI: "Slovenia", SK: "Slovakia", SM: "San Marino", TH: "Thailand", TR: "Turkey", ZA: "South Africa" }, country: "Please enter a valid identification number in %s", default: "Please enter a valid identification number" }, identical: { default: "Please enter the same value" }, imei: { default: "Please enter a valid IMEI number" }, imo: { default: "Please enter a valid IMO number" }, integer: { default: "Please enter a valid number" }, ip: { default: "Please enter a valid IP address", ipv4: "Please enter a valid IPv4 address", ipv6: "Please enter a valid IPv6 address" }, isbn: { default: "Please enter a valid ISBN number" }, isin: { default: "Please enter a valid ISIN number" }, ismn: { default: "Please enter a valid ISMN number" }, issn: { default: "Please enter a valid ISSN number" }, lessThan: { default: "Please enter a value less than or equal to %s", notInclusive: "Please enter a value less than %s" }, mac: { default: "Please enter a valid MAC address" }, meid: { default: "Please enter a valid MEID number" },
        notEmpty: { default: "Este campo é obrigatório" },
        numeric: { default: "Please enter a valid float number" },
        phone: { countries: { AE: "United Arab Emirates", BG: "Bulgaria", BR: "Brazil", CN: "China", CZ: "Czech Republic", DE: "Germany", DK: "Denmark", ES: "Spain", FR: "France", GB: "United Kingdom", IN: "India", MA: "Morocco", NL: "Netherlands", PK: "Pakistan", RO: "Romania", RU: "Russia", SK: "Slovakia", TH: "Thailand", US: "USA", VE: "Venezuela" }, country: "Please enter a valid phone number in %s", default: "Please enter a valid phone number" }, promise: { default: "Please enter a valid value" },
        regexp: { default: "Please enter a value matching the pattern" },
        remote: { default: "Please enter a valid value" },
        rtn: { default: "Please enter a valid RTN number" },
        sedol: { default: "Please enter a valid SEDOL number" },
        siren: { default: "Please enter a valid SIREN number" },
        siret: { default: "Please enter a valid SIRET number" },
        step: { default: "Please enter a valid step of %s" },
        stringCase: { default: "Please enter only lowercase characters", upper: "Please enter only uppercase characters" },
        stringLength: { between: "Please enter value between %s and %s characters long", default: "Please enter a value with valid length", less: "Please enter less than %s characters", more: "Por favor, forne&ccedil;a ao menos %s caracteres." },
        uri: { default: "Please enter a valid URI" },
        uuid: { default: "Please enter a valid UUID number", version: "Please enter a valid UUID version %s number" },
        vat: { countries: { AT: "Austria", BE: "Belgium", BG: "Bulgaria", BR: "Brazil", CH: "Switzerland", CY: "Cyprus", CZ: "Czech Republic", DE: "Germany", DK: "Denmark", EE: "Estonia", EL: "Greece", ES: "Spain", FI: "Finland", FR: "France", GB: "United Kingdom", GR: "Greece", HR: "Croatia", HU: "Hungary", IE: "Ireland", IS: "Iceland", IT: "Italy", LT: "Lithuania", LU: "Luxembourg", LV: "Latvia", MT: "Malta", NL: "Netherlands", NO: "Norway", PL: "Poland", PT: "Portugal", RO: "Romania", RS: "Serbia", RU: "Russia", SE: "Sweden", SI: "Slovenia", SK: "Slovakia", VE: "Venezuela", ZA: "South Africa" }, country: "Please enter a valid VAT number in %s", default: "Please enter a valid VAT number" }, vin: { default: "Please enter a valid VIN number" }, zipCode: { countries: { AT: "Austria", BG: "Bulgaria", BR: "Brazil", CA: "Canada", CH: "Switzerland", CZ: "Czech Republic", DE: "Germany", DK: "Denmark", ES: "Spain", FR: "France", GB: "United Kingdom", IE: "Ireland", IN: "India", IT: "Italy", MA: "Morocco", NL: "Netherlands", PL: "Poland", PT: "Portugal", RO: "Romania", RU: "Russia", SE: "Sweden", SG: "Singapore", SK: "Slovakia", US: "USA" }, country: "Please enter a valid postal code in %s", default: "Please enter a valid postal code" }
    }; return pt_BR
}));

const cpf = function () {
    return {
        validate: function (input) {
            const value = input.value;

            if (value !== '') {
                return { valid: validarCPF(value), message: 'Por favor, forneça um cpf válido' };
            }

            return { valid: true };
        }
    };
};

const decimalGreaterThan0 = function () {
    return {
        validate: function (input) {
            const value = input.value;
            if (value !== '') {
                const valueFormatado = value.replaceAll(".", "").replaceAll(",", ".");

                if (parseFloat(valueFormatado) <= 0) {
                    return { valid: false, message: 'Por favor, forne&ccedil;a um valor maior que 0,00' };
                }
            }

            return { valid: true };
        }
    };
};

const decimalLessThan = function () {
    return {
        validate: function (input) {

            const value = input.value;
            const valuePrincipal = $(input.options.fieldCompare).val();

            if (value !== '' && valuePrincipal !== '') {
                const valueFormatado = value.replaceAll(".", "").replaceAll(",", ".");
                const valuePrincipalFormatado = valuePrincipal.replaceAll(".", "").replaceAll(",", ".");

                if (parseFloat(valuePrincipalFormatado) > 0) {
                    if (parseFloat(valueFormatado) > parseFloat(valuePrincipalFormatado))
                        return { valid: false, message: input.options.message };
                }
            }

            return { valid: true };
        }
    };
};

const fileExtensionExcel = function () {
    return {
        validate: function (input) {
            const value = input.value;

            if (value !== '') {
                var type = input.element.files[0].type;

                if (type !== 'application/vnd.ms-excel' && type !== 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') {
                    return { valid: false, message: 'Por favor, forneça um arquivo válido' };
                }

                return { valid: true };
            }
            else {
                return { valid: false, message: 'Este campo é obrigatório' };
            }

        }
    };
};

const numericGreaterThan0 = function () {
    return {
        validate: function (input) {
            const value = input.value;
            if (value !== '') {
                const valueFormatado = value.replaceAll(".", "");

                if (parseFloat(valueFormatado) <= 0) {
                    return { valid: false, message: 'Por favor, forne&ccedil;a um valor maior que 0' };
                }
            }

            return { valid: true };
        }
    };
};

const passwordComplex = function () {
    return {
        validate: function (input) {
            const value = input.value;

            if (value !== '') {
                if (/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,16}$/.test(value)) {
                    return { valid: true };
                }
                else {
                    return { valid: false, message: 'Por favor, forne&ccedil;a um número, uma letra, mínimo de 8 caracteres e máximo de 16 caracteres' };
                }
            }

            return { valid: true };
        }
    };
}

const percentualLessThan100 = function () {
    return {
        validate: function (input) {
            const value = input.value;
            if (value !== '') {
                const valueFormatado = value.replaceAll(".", "").replaceAll(",", ".");
                if (parseFloat(valueFormatado) >= 100) {
                    return { valid: false, message: 'Por favor, forne&ccedil;a um valor menor ou igual a 100%' };
                }
            }

            return { valid: true };
        }
    };
};

function validarCNPJ(value) {
    value = value.replace(/[^\d]+/g, '');

    if (value !== '') {
        if (value.length === 14) {
            // Elimina CNPJs invalidos conhecidos
            if (value === "00000000000000" ||
                value === "11111111111111" ||
                value === "22222222222222" ||
                value === "33333333333333" ||
                value === "44444444444444" ||
                value === "55555555555555" ||
                value === "66666666666666" ||
                value === "77777777777777" ||
                value === "88888888888888" ||
                value === "99999999999999")
                return false;

            tamanho = value.length - 2
            numeros = value.substring(0, tamanho);
            digitos = value.substring(tamanho);
            soma = 0;
            pos = tamanho - 7;
            for (i = tamanho; i >= 1; i--) {
                soma += numeros.charAt(tamanho - i) * pos--;
                if (pos < 2)
                    pos = 9;
            }
            resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;

            if (parseFloat(resultado) !== parseFloat(digitos.charAt(0)))
                return false;

            tamanho = tamanho + 1;
            numeros = value.substring(0, tamanho);
            soma = 0;
            pos = tamanho - 7;
            for (i = tamanho; i >= 1; i--) {
                soma += numeros.charAt(tamanho - i) * pos--;
                if (pos < 2)
                    pos = 9;
            }
            resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;

            if (parseFloat(resultado) !== parseFloat(digitos.charAt(1)))
                return false;
        }
    }

    return true;
}

function validarCPF(cpf) {
    var Soma = 0
    var Resto

    var strCPF = String(cpf).replace(/[^\d]/g, '')

    if (strCPF.length === 11) {
        if ([
            '00000000000',
            '11111111111',
            '22222222222',
            '33333333333',
            '44444444444',
            '55555555555',
            '66666666666',
            '77777777777',
            '88888888888',
            '99999999999',
        ].indexOf(strCPF) !== -1)
            return false

        for (i = 1; i <= 9; i++)
            Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);

        Resto = (Soma * 10) % 11

        if ((parseInt(Resto) === 10) || (parseInt(Resto) === 11))
            Resto = 0

        if (parseInt(Resto) !== parseInt(strCPF.substring(9, 10)))
            return false

        Soma = 0

        for (i = 1; i <= 10; i++)
            Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i)

        Resto = (Soma * 10) % 11

        if ((parseInt(Resto) === 10) || (parseInt(Resto) === 11))
            Resto = 0

        if (parseInt(Resto) !== parseInt(strCPF.substring(10, 11)))
            return false
    }

    return true
}

FormValidation.validators.cpf = cpf;
//FormValidation.validators.cnpj = cnpj;
FormValidation.validators.decimalGreaterThan0 = decimalGreaterThan0;
FormValidation.validators.decimalLessThan = decimalLessThan;
FormValidation.validators.fileExtensionExcel = fileExtensionExcel;
FormValidation.validators.numericGreaterThan0 = numericGreaterThan0;
FormValidation.validators.passwordComplex = passwordComplex;
FormValidation.validators.percentualLessThan100 = percentualLessThan100;



