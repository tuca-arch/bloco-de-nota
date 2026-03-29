#!/bin/bash

cd ~/projects/bloco-de-notas || { echo "Pasta do projeto não encontrada "; exit 1; }

WINDOWS_IP=$(powershell.exe ipconfig | grep -E "IPv4|Endereço IPv4" | grep -E "$WINDOWS_IP" | head 1 | sed 's/.*: *//' | tr -d '[:space:]') 

if [-z "$WINDOWS_IP"];then
echo "Não achei u IP válido ($WINDOWS_IP) do windows"
echo "Verificque sua conexão de rede e rode power.shell.exe ipconfig para inspecionar"
exit 1;
fi

echo "....  Iniciando Expo com IP:$WINDOWS_IP ...."
echo "Abra o EXpo GO no celuar e escaneie o QR Code para entrar no app Bloco de Notas"

#REACT_NATIVE_PACKAGER_HOSTNAME=$WINDOWS_IP npx expo start --lan
REACT_NATIVE_PACKAGER_HOSTNAME=192.168.200.8 npx expo start --lan
