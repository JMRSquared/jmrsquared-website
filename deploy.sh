 docker stop jmr-squared-website
 docker rm jmr-squared-website
 docker build -t jmr-squared-website:latest .
 docker run -dit -p 9991:3000 --restart=always --name jmr-squared-website jmr-squared-website:latest