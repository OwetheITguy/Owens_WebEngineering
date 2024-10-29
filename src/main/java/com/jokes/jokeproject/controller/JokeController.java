package com.jokes.jokeproject.controller;


import com.jokes.jokeproject.domain.JokeResponse;
import com.jokes.jokeproject.service.joke.JokeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class JokeController {

    @Autowired
    private JokeService jokeService;

    @GetMapping("jokes/random")
    public JokeResponse getRandomJoke(){
        return jokeService.getRandomJoke();
    }

    @GetMapping("jokes/types")
    public String[] getJokeTypes(){
        return jokeService.getJokeTypes();
    }

    @GetMapping("jokes/{type}")
    public JokeResponse[] getRandomJokeType(@PathVariable String type) {
        return jokeService.getRandomJokeType(type);
    }
}
