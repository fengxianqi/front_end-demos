#!/bin/bash

function deploy() {
  # 测试服务器
  test_host="root@test_server_ip"
  # 生产服务器
  prod_host="root@prod_server_ip"
  project_path="/srv/YourProject"

  if [ "$1" == "prod" ]; then
    target="$prod_host:$project_path"
  else
    target="$test_host:$project_path"
  fi

  rsync -azcuP ./ --exclude node_modules --exclude coverage --exclude .env --exclude .nyc_output --exclude .git "$target"
  echo "deploy to $target"
}

deploy $@