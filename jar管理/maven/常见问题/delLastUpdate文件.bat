@echo off
rem create by sunhao(sunhao.java@gmail.com)
rem crazy coder
  
rem -- ����д��Ĳֿ�·��
set REPOSITORY_PATH=C:\Users\Administrator\.m2\repository
rem -- ��������...
for /f "delims=" %%i in ('dir /b /s "%REPOSITORY_PATH%\*lastUpdated*"') do (
    del /s /q %%i
)
rem �������
pause