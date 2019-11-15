/****************************************
 * Program: Full-Stack JS TechDegree    *
 * Project 3 - Interactive Form         *
 * Author: Michael Nunez                *
 * Date: 11.14.2019                     *
 *****************************************/

// First text field set to focus
$("#name").focus();

/*********************************
 *       Job Role Section        *
 *********************************/

const jobroleSelector = $("select[id='title']"); // Main select element that has all options
const otherInput = $("#other-title"); // Hidden input
otherInput.hide(); // hidden by default

// Whenever Input changes, check if Option is chosen
jobroleSelector.change(() => {
  const selectedOption = $("select[name='user-title'] option:selected").text();
  if (selectedOption == "Other") {
    otherInput.show();
  } else {
    otherInput.hide();
  }
}); //END_EVENT

/*********************************
 *     T-Shirt Info Section      *
 *********************************/

const designSelector = $("select[id='design']");
const colorSelector = $("select[id='color']");
const colorMenu = $("#colors-js-puns");
colorMenu.hide();

// Default settings for Color Selector - Disabled
$("<option>Please select a T-shirt theme</option>").appendTo(colorSelector); // Create new option for default
colorSelector.find('option:contains("Please")').attr("selected", true); // Finds option, sets to true
colorSelector.prop("disabled", true); // Selector disabled by default

// When design dropdown is changed
designSelector.change(() => {
  // Disables Select Theme as option
  designSelector.find('option:contains("Select")').attr("disabled", true);

  const selectedOption = $("select[id='design'] option:selected").text();
  // User changes from default
  if (selectedOption !== "Select Theme") {
    colorMenu.show();
    colorSelector.prop("disabled", false); // Enable
    colorSelector.find('option:contains("Please")').remove();
    // User chooses theme 'JS Puns'
    if (selectedOption == "Theme - JS Puns") {
      $("option[value='cornflowerblue']").show().attr("selected", true);
      $("option[value='darkslategrey']").show();
      $("option[value='gold']").show();
      $("option[value='tomato']").hide().attr("selected", false);
      $("option[value='steelblue']").hide();
      $("option[value='dimgrey']").hide();
    }
    // User chooses theme 'I love JS'
    else if (selectedOption == "Theme - I ♥ JS") {
      $("option[value='cornflowerblue']").hide().attr("selected", false);
      $("option[value='darkslategrey']").hide();
      $("option[value='gold']").hide();
      $("option[value='tomato']").show().attr("selected", true);
      $("option[value='steelblue']").show();
      $("option[value='dimgrey']").show();
    }
  } 
});

/*********************************
 * Register 4 Activities Section *
 *********************************/

// Variables referencing each checkbox
const mainConference = $("input[name='all']");
const framworkWorkshop = $("input[name='js-frameworks']");
const libraryWorkshop = $("input[name='js-libs']");
const expressWorkshop = $("input[name='express']");
const nodeWorkshop = $("input[name='node']");
const buildtoolWorkshop = $("input[name='build-tools']");
const npmWorkshop = $("input[name='npm']");
let workshopTotal = 0;

// Sets up HTML for Total
$(".activities").append('<p id="total">Total: $' + workshopTotal + "</p>");
const totalPara = $("#total");

// Main Conference Checkbox
mainConference.change(e => {
  if (mainConference.is(":checked")) {
    // Updates Total
    workshopTotal += 200;
    totalPara.text("Total: $" + workshopTotal);
  } else {
    // Updates Total
    workshopTotal -= 200;
    totalPara.text("Total: $" + workshopTotal);
  }
});

// JS Frameworks Workshop
framworkWorkshop.change(() => {
  if (framworkWorkshop.is(":checked")) {
    // Updates Total
    workshopTotal += 100;
    totalPara.text("Total: $" + workshopTotal);
    // Disables and strikes through Express & Build Tool
    expressWorkshop.prop("disabled", true);
    expressWorkshop.closest("label").wrap("<strike>");
  } else {
    // Updates Total
    workshopTotal -= 100;
    totalPara.text("Total: $" + workshopTotal);
    // Enables and removes strikethrough on Express & Build Tool
    expressWorkshop.prop("disabled", false);
    expressWorkshop.closest("label").unwrap();
  }
});

// Library Workshop
libraryWorkshop.change(() => {
  if (libraryWorkshop.is(":checked")) {
    // Updates Total
    workshopTotal += 100;
    totalPara.text("Total: $" + workshopTotal);
    // Disables and strikes through Node & NPM
    nodeWorkshop.prop("disabled", true);
    nodeWorkshop.closest("label").wrap("<strike>");
  } else {
    // Updates Total
    workshopTotal -= 100;
    totalPara.text("Total: $" + workshopTotal);
    // Enables and removes strikethrough on Node & NPM
    nodeWorkshop.prop("disabled", false);
    nodeWorkshop.closest("label").unwrap();
  }
});

// Express Workshop
expressWorkshop.change(() => {
  if (expressWorkshop.is(":checked")) {
    // Updates Total
    workshopTotal += 100;
    totalPara.text("Total: $" + workshopTotal);
    // Disables and strikes through Frameworks & Build Tool
    framworkWorkshop.prop("disabled", true);
    framworkWorkshop.closest("label").wrap("<strike>");
  } else {
    // Updates Total
    workshopTotal -= 100;
    totalPara.text("Total: $" + workshopTotal);
    // Enables and removes strikethrough on Frameworks & Build Tool
    framworkWorkshop.prop("disabled", false);
    framworkWorkshop.closest("label").unwrap();
  }
});

// Node Workshop
nodeWorkshop.change(() => {
  if (nodeWorkshop.is(":checked")) {
    // Updates Total
    workshopTotal += 100;
    totalPara.text("Total: $" + workshopTotal);
    // Disables and strikes through Library & NPM
    libraryWorkshop.prop("disabled", true);
    libraryWorkshop.closest("label").wrap("<strike>");
  } else {
    // Updates Total
    workshopTotal -= 100;
    totalPara.text("Total: $" + workshopTotal);
    // Enables and removes strikethrough on Library & NPM
    libraryWorkshop.prop("disabled", false);
    libraryWorkshop.closest("label").unwrap();
  }
});

// Build Tools Workshop
buildtoolWorkshop.change(() => {
  if (buildtoolWorkshop.is(":checked")) {
    // Updates Total
    workshopTotal += 100;
    totalPara.text("Total: $" + workshopTotal);
  } else {
    // Updates Total
    workshopTotal -= 100;
    totalPara.text("Total: $" + workshopTotal);
  }
});

// NPM Workshop
npmWorkshop.change(() => {
  if (npmWorkshop.is(":checked")) {
    // Updates Total
    workshopTotal += 100;
    totalPara.text("Total: $" + workshopTotal);
  } else {
    // Updates Total
    workshopTotal -= 100;
    totalPara.text("Total: $" + workshopTotal);
  }
});

/*********************************
 *     Payment Info Section      *
 *********************************/

// DOM Variables
const paymentSelector = $("#payment");
const creditDIV = $("#credit-card");
const paypalDIV = $("#paypal");
const bitcoinDIV = $("#bitcoin");

// By Default
$("#payment option:selected").remove();
paypalDIV.hide();
bitcoinDIV.hide();

// Handles showing / hiding payments whenever selector changes
paymentSelector.change(() => {
  if ($("#payment option:selected").text() === "Credit Card") {
    creditDIV.show();
    paypalDIV.hide();
    bitcoinDIV.hide();
  } else if ($("#payment option:selected").text() === "PayPal") {
    paypalDIV.show();
    creditDIV.hide();
    bitcoinDIV.hide();
  } else if ($("#payment option:selected").text() === "Bitcoin") {
    bitcoinDIV.show();
    creditDIV.hide();
    paypalDIV.hide();
  }
}); //END_EVENT

/*********************************
 *        FORM VALIDATION        *
 *********************************/

const submitButton = $("button[type='submit']");

// When Register button is clicked
submitButton.click(e => {
  // Run functions initially
  isEmailValid();
  isActivitySelected();
  isCreditInfoEntered();
  // If something was entered wrong
  if (
    isNameValid() == false ||
    isEmailValid() == false ||
    isActivitySelected() == false ||
    isCreditInfoEntered() == false
  ) {
    e.preventDefault();
  }
});

/*********************************
 *     Check for Valid Name      *
 *********************************/
const isNameValid = () => {
  const name = $("#name")
    .val()
    .trim();
  const regex = /.+/;
  // Name is not Empty
  if (regex.test(name) == true) {
    $("#name").css("border-color", ""); // Resets to default
    $("#nameTooltip").remove(); // Removes tooltip
    return true;
    // Name is empty
  } else {
    // Checks to see if ID exists, this gets rid of duplicate error tooltips
    if (!$("#nameTooltip").length) {
      $("#name").after(
        '<p id="nameTooltip" style="color:red; margin-top:0;">Name field cannot be blank</p>'
      );
    }
    $("#name").css("border-color", "red");
    return false;
  }
};

// Real-time Checking
$("#name").on("input", () => {
  isNameValid();
});

/*********************************
 *     Check for valid Email     *
 *********************************/
const isEmailValid = () => {
  const email = $("#mail").val();
  const regex = /^\w+@\w+\.(com|net|org|edu|gov)$/;
  if (regex.test(email) == true) {
    $("#mail").css("border-color", "");
    $("#emailTooltip").remove();
    return true;
  } else {
    // Checks to see if ID exists, this gets rid of duplicate error tooltips
    if (!$("#emailTooltip").length) {
      $("#mail").after(
        '<p id="emailTooltip" style="color:red; margin-top:0;">Email field is invalid (Example: username@domain.com)</p>'
      );
    }
    $("#mail").css("border-color", "red"); // Resets to default
    return false;
  }
};

// Real-time Checking
$("#mail").on("input", () => {
  isEmailValid();
});

/*********************************
 *  Check Activity is Selected   *
 *********************************/
const isActivitySelected = () => {
  const checkboxes = $("input[type='checkbox']");
  let checked = false;
  for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked == true) {
      checked = true;
    }
  }
  if (checked == false) {
    // Checks to see if ID exists, this gets rid of duplicate error tooltips
    if (!$("#activityTooltip").length) {
      $(".activities legend").after(
        '<p id="activityTooltip" style="color:red; margin-top:0;">At least one activity must be selected</p>'
      );
    }
    $(".activities legend").css("color", "red");
  } else {
    $(".activities legend").css("color", ""); // Resets to default
    $("#activityTooltip").remove();
  }
  return checked;
};

// Real-time Checking
$('input[type="checkbox"]').on("change", () => {
  isActivitySelected();
});

/*********************************
 *   Checks for Valid CC Info    *
 *********************************/
const isCreditInfoEntered = () => {
  // If the user selected Credit Card
  if ($("#payment option:selected").text() === "Credit Card") {
    let ccNum = null;
    let zipNum = null;
    let cvvNum = null;

    /**
     * Credit Card Number
     */
    const validateCC = () => {
      const creditCard = $("#cc-num").val();
      const regex1 = /^\d{13,16}$/;
      // Field is not blank
      if (creditCard != "") {
        // Check if CC Number is valid
        if (regex1.test(creditCard)) {
          // Yes it's valid
          ccNum = true;
          $("#cc-num").css("border-color", "");
          $("#creditInvalidTooltip").remove();
          $("#creditBankTooltip").remove();
        } else {
          // No it's not valid
          // Checks to see if ID exists, this gets rid of duplicate error tooltips
          if (!$("#creditInvalidTooltip").length) {
            $("#cc-num").after(
              '<p id="creditInvalidTooltip" style="color:red; margin-top:0;">Credit Card field is not valid. Must contain a number between 13-16 digits.</p>'
            );
          }
          $("#creditBlankTooltip").remove();
          $("#cc-num").css("border-color", "red");
        }
      } else {
        // Empty field
        // Checks to see if ID exists, this gets rid of duplicate error tooltips
        if (!$("#creditBlankTooltip").length) {
          $("#cc-num").after(
            '<p id="creditBlankTooltip" style="color:red; margin-top:0;">Credit Card field cannot be blank</p>'
          );
        }
        $("#creditInvalidTooltip").remove();
        $("#cc-num").css("border-color", "red");
      }
    };

    validateCC();

    /**
     * Zip Code
     */
    const validateZip = () => {
      const zipcode = $("#zip").val();
      const regex2 = /^\d{5}$/;
      // Field is not blank
      if (zipcode != "") {
        // Check if CC Number is valid
        if (regex2.test(zipcode)) {
          // Yes it's valid
          zipNum = true;
          $("#zipInvalidTooltip").remove();
          $("#zipBlankTooltip").remove();
          $("#zip").css("border-color", "");
        } else {
          // Not valid
          if (!$("#zipInvalidTooltip").length) {
            $("#zip").after(
              '<p id="zipInvalidTooltip" style="color:red; margin-top:0;">Zip Code is not valid. Must be a 5 digit number.</p>'
            );
          }
          $("#zipBlankTooltip").remove();
          $("#zip").css("border-color", "red");
        }
      } else {
        // Empty field
        if (!$("#zipBlankTooltip").length) {
          $("#zip").after(
            '<p id="zipBlankTooltip" style="color:red; margin-top:0;">Zip Code cannot be blank</p>'
          );
        }
        $("#zipInvalidTooltip").remove();
        $("#zip").css("border-color", "red");
      }
    };

    validateZip();

    /**
     * CVV
     */
    const validateCVV = () => {
      const cvv = $("#cvv").val();
      const regex3 = /^\d{3}$/;
      // Field is not blank
      if (cvv != "") {
        // Check if CC Number is valid
        if (regex3.test(cvv)) {
          // Yes it's valid
          cvvNum = true;
          $("#cvvInvalidTooltip").remove();
          $("#cvvBlankTooltip").remove();
          $("#cvv").css("border-color", "");
        } else {
          // Not valid
          if (!$("#cvvInvalidTooltip").length) {
            $("#cvv").after(
              '<p id="cvvInvalidTooltip" style="color:red; margin-top:0;">CVV is invalid. 3 digit number required.</p>'
            );
          }
          $("#cvvBlankTooltip").remove();
          $("#cvv").css("border-color", "red");
        }
      } else {
        // Empty field
        if (!$("#cvvBlankTooltip").length) {
          $("#cvv").after(
            '<p id="cvvBlankTooltip" style="color:red; margin-top:0;">CVV field cannot be blank</p>'
          );
        }
        $("#cvvInvalidTooltip").remove();
        $("#cvv").css("border-color", "red");
      }
    };

    validateCVV();

    /**
     * Checks all 3 are valid (Credit Card, Zip Code, CVV)
     */
    if (ccNum == true && zipNum == true && cvvNum == true) {
      return true;
    } else {
      return false;
    }

    // If the user selected anything other than a credit card
  } else {
    return true;
  }
};

// Real-time for Credit Card
$("#cc-num").on("input", () => {
  isCreditInfoEntered();
});

// Real-time for Zip Code
$("#zip").on("input", () => {
  isCreditInfoEntered();
});

// Real-time for CVV
$("#cvv").on("input", () => {
  isCreditInfoEntered();
});
