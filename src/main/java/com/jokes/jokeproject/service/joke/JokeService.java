package com.jokes.jokeproject.service.joke;

import com.jokes.jokeproject.domain.JokeResponse;

public interface JokeService {

    JokeResponse getRandomJoke();

    String[] getJokeTypes();

    JokeResponse[] getRandomJokeType(String type);
}
