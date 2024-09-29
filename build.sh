chmod +x build.sh
./build.sh#!/bin/bash

# Biên dịch LESS thành CSS
lessc less/styles.less css/styles.css

# Thông báo hoàn thành
echo "LESS đã được biên dịch thành CSS thành công!"


