image_name="react_vite_ts"

docker build --pull --rm -f "Dockerfile" -t ${image_name}:latest "."

docker save ${image_name} | gzip > image.tar.gz


echo 手动加载
echo docker tag ${image_name}:latest ${image_name}:old
echo docker load -i /tmp/image.tar.gz
echo 手动打tag,注意修改版本号码: