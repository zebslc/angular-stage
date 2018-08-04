# AngularStage

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

## Purpose

It was created as a proof of concept about how I could dynamically load jumbotron (or any size) headers which are self-contained with animation etc.

## Structure

The application consists of a service and respository that has mock scene data.

- Each of the scenes contains a number of tags such as the pages they are to appear on and anything else that will prompt them to load.
- They can then be re-used across different pages.
- The data is held in a simple JSON format at the moment.
- It makes use of a responsive service to adjust the page layout.
- Mobile scenes can be created which are simpler and more suited to the device

## Todo

Improve test coverage of the stage component - currently it is not anywhere near acceptable

## Bonus features

- All the setup is included for headless testing and code coverage with output that can be picked up with CI/CT environments. You can also find the thresholds for coverage there too.
- The list of NG commands has been extended - just type `npm run [extended action]` e.g. `npm run cover` for the coverage report. This is also to help with the CI/CT
