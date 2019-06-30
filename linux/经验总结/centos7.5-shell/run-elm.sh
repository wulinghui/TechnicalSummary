cd ~/github
git clone https://github.com/bailicangdu/node-elm  
cd node-elm
npm install
nohup npm run dev &
# 访问: http://localhost:8001（如果已启动前台程序，则不需打开此地址）
cd ~/github
git clone https://github.com/bailicangdu/vue2-elm.git  
cd vue2-elm
npm install
nohup npm run dev &
#
cd ~/github
git clone https://github.com/bailicangdu/vue2-manage  
cd vue2-manage
npm install
#(访问线上后台系统)
nohup npm run dev &
#  (访问本地后台系统，需运行node-elm后台系统)
# npm run local
# 访问: http://localhost:8002