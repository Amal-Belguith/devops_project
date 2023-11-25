pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build and Push Docker Image') {
            steps {
                script {
                    dockerImage = docker.build("dockerimg")
                    docker.withRegistry('https://registry.example.com', 'registry-credentials') {
                        dockerImage.push()
                    }
                }
            }
        }

        stage('Deploy to Docker') {
            steps {
                script {
                    sh 'docker run -p 8080:80 dockerimg'
                }
            }
        }
    }
}
